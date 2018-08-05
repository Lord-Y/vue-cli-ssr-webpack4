const path = require("path")
const webpack = require("webpack")
const vueConfig = require("./vue-loader.config")
const { VueLoaderPlugin } = require("vue-loader")

const isProd = process.env.NODE_ENV === "production"
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
			"@router": path.resolve(__dirname, "../src/router"),
			"@store": path.resolve(__dirname, "../src/store"),
			"@mixins": path.resolve(__dirname, "../src/mixins"),
			"@filters": path.resolve(__dirname, "../src/filters"),
			"@directives": path.resolve(__dirname, "../src/directives"),
			"@api": path.resolve(__dirname, "../src/api"),
			"@js": path.resolve(__dirname, "../src/js")
		},
		extensions: [".js", ".vue", ".css", ".scss"]
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(vue|js)$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				// test: /\.js$/,
				// loader: 'babel-loader',
				// exclude: file => (
				//   /node_modules/.test(file) &&
				//   !/\.vue\.js/.test(file)
				// ),
				// {
				//   test: /\.js$/,
				//   use: {
				//     loader: 'babel-loader',
				//     options: {
				//       compact: 'false'
				//     }
				//   }
				// }
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: "babel-loader"
					// options: { presets: ['es2015'] }
				}]
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
							modules: true,
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
		hints: isProd ? "warning" : false
	},
	plugins: [
		new VueLoaderPlugin()
		// isProd
		//   ? [
		//     new webpack.optimize.UglifyJsPlugin({
		//       compress: { warnings: false }
		//     }),
		//     new webpack.optimize.ModuleConcatenationPlugin(),
		//     // new ExtractTextPlugin({
		//     //   filename: 'common.[chunkhash].css'
		//     // }),
		//   ]
		//   : [
		//     new FriendlyErrorsPlugin()
		//   ]
	]
}
