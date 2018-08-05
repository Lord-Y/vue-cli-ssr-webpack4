import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

// Import routes
import routesA from "./routesA.js"

export function createRouter() {
	return new Router({
		mode: "history",
		base: __dirname,
		routes: [
			...routesA
		]
	})
}
