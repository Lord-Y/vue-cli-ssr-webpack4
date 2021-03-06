const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
// to debug size of vendor, app and else
// https://medium.com/@hpux/webpack-4-in-production-how-make-your-life-easier-4d03e2e5b081
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// https://medium.com/ottofellercom/0-100-in-two-seconds-speed-up-webpack-465de691ed4a
// https://github.com/mzgoddard/hard-source-webpack-plugin
// on 1st build, webpack will take more time than usual to compile but the second build will be drastically faster 2min VS 24s
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin');
const isProd = process.env.NODE_ENV === "production"
// console.log("process.env.NODE_ENV", env)
module.exports = {
	devServer: {
		stats: "errors-only"
	},
	mode: isProd ? isProd : "development",
	devtool: isProd ? false : "#eval-source-map",
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/dist/",
		filename: "[name].[chunkhash].js"
	},
	resolve: {
		alias: {
			"@public": path.resolve(__dirname, "../public"),
			"@statics": path.resolve(__dirname, "../statics"),
			"@src": path.resolve(__dirname, "../src"),
			"@components": path.resolve(__dirname, "../src/components"),
			"@slots": path.resolve(__dirname, "../src/components/slots"),
			"@router": path.resolve(__dirname, "../src/router"),
			"@store": path.resolve(__dirname, "../src/store"),
			"@mixins": path.resolve(__dirname, "../src/mixins"),
			"@filters": path.resolve(__dirname, "../src/filters"),
			"@directives": path.resolve(__dirname, "../src/directives"),
			"@api": path.resolve(__dirname, "../src/api"),
			"@js": path.resolve(__dirname, "../src/js"),
			"@locales": path.resolve(__dirname, "../src/locales"),
			"@utils": path.resolve(__dirname, "../utils")
		},
		extensions: [".js", ".vue", ".css", ".scss"]
	},
	node: {
		fs: "empty"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(vue|js)$/,
				loader: "eslint-loader",
				exclude: /(node_modules|src\/assets)/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /(node_modules)/,
				options: {
					plugins: [require("@babel/plugin-syntax-dynamic-import").default]
				}
			},
			{
				test: /\.css$/,
				use: [
					"vue-style-loader",
					"css-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: {
							// modules: true,
							localIdentName: "[local]_[hash:base64:8]"
						}
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[local]_[hash:base64:8]"
						}
					},
					{
						loader: "sass-loader",
						options: {
							indentedSyntax: true
						}
					}
				]
			},
			{
				test: /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]?[hash]"
				}
			}
		]
	},
	performance: {
		maxEntrypointSize: 400000,
		hints: isProd ? "warning" : false,
		maxAssetSize: 100000
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new VueLoaderPlugin(),
		new CompressionPlugin(),
		// new BundleAnalyzerPlugin()
	]
}
