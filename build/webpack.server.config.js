const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./webpack.base.config")
const nodeExternals = require("webpack-node-externals")
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin")
const fs = require("fs"); const path = require("path")
const envFile = path.resolve(process.cwd(), "config/env.js")
const env = fs.existsSync(envFile) ? require(envFile) : require("../config/dev.env.js")

module.exports = merge(base, {
	target: "node",
	devtool: "#source-map",
	entry: "./src/entry-server.js",
	output: {
		filename: "server-bundle.js",
		libraryTarget: "commonjs2"
	},
	// https://webpack.js.org/configuration/externals/#externals
	// https://github.com/liady/webpack-node-externals
	externals: nodeExternals({
		whitelist: [/\.css$/, /^vue-loading-spinner/, /^vue-spinner/]
	}),
	plugins: [
		new webpack.DefinePlugin({
			"process.env": env,
			"process.env.VUE_ENV": "\"server\""
		}),
		new VueSSRServerPlugin()
	]
})
