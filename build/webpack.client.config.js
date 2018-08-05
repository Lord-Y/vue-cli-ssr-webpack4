const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./webpack.base.config")
const SWPrecachePlugin = require("sw-precache-webpack-plugin")
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")
const fs = require("fs"); const path = require("path")
const envFile = path.resolve(process.cwd(), "config/env.js")
const env = fs.existsSync(envFile) ? require(envFile) : require("../config/dev.env.js")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const config = merge(base, {
	entry: {
		app: "./src/entry-client.js"
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all"
				}
			}
		},
		minimizer: [
			// we specify a custom UglifyJsPlugin here to get source maps in production
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	},
	plugins: [
		// strip dev-only code in Vue source
		new webpack.DefinePlugin({
			"process.env": env,
			"process.env.VUE_ENV": "\"client\""
		}),
		new VueSSRClientPlugin()
	]
})

if (process.env.NODE_ENV === "production") {
	config.plugins.push(
		// auto generate service worker
		new SWPrecachePlugin({
			cacheId: "vue-hn",
			filename: "service-worker.js",
			minify: true,
			dontCacheBustUrlsMatching: /./,
			staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
			runtimeCaching: [
				{
					urlPattern: "/",
					handler: "networkFirst"
				},
				{
					urlPattern: /\/(top|new|show|ask|jobs)/,
					handler: "networkFirst"
				},
				{
					urlPattern: "/item/:id",
					handler: "networkFirst"
				},
				{
					urlPattern: "/user/:id",
					handler: "networkFirst"
				}
			]
		})
	)
}

module.exports = config
