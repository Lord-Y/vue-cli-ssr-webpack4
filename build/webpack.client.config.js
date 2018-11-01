const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./webpack.base.config")
const SWPrecachePlugin = require("sw-precache-webpack-plugin")
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")
const fs = require("fs"); const path = require("path")
const envFile = path.resolve(process.cwd(), "config/env.js")
const env = fs.existsSync(envFile) ? require(envFile) : require("../config/dev.env.js")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const isProd = process.env.NODE_ENV === "production"

const config = merge(base, {
	entry: {
		app: "./src/entry-client.js"
	},
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all"
				}
			}
		},
		minimizer: isProd ? [
			// we specify a custom UglifyJsPlugin here to get source maps in production
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					output: {
						comments: false
					},
					compress: {
						sequences: true,
						dead_code: true,
						conditionals: true,
						booleans: true,
						unused: true,
						if_return: true,
						join_vars: true
					},
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
			:
			[
				// we specify a custom UglifyJsPlugin here to get source maps in production
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					uglifyOptions: {
						compress: {
							arrows: false,
							booleans: false,
							cascade: false,
							collapse_vars: false,
							comparisons: false,
							computed_props: false,
							hoist_funs: false,
							hoist_props: false,
							hoist_vars: false,
							if_return: false,
							inline: false,
							join_vars: false,
							keep_infinity: true,
							loops: false,
							negate_iife: false,
							properties: false,
							reduce_funcs: false,
							reduce_vars: false,
							sequences: false,
							side_effects: false,
							switches: false,
							top_retain: false,
							toplevel: false,
							typeofs: false,
							unused: true,
							// Switch off all types of compression except those needed to convince
							// react-devtools that we're using a production build
							conditionals: true,
							dead_code: true,
							evaluate: true
						},
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
				}
			]
		})
	)
}

module.exports = config
