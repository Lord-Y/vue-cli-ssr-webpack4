// app.js
import Vue from "vue"
import App from "./App.vue"
import { createStore } from "@store"
import { createRouter } from "@router"
import { sync } from "vuex-router-sync"
import headMixin from "./mixins/head"

Vue.config.debug = true

// mixin for handling title
Vue.mixin(headMixin)
// // register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

export function createApp() {
	const store = createStore()
	const router = createRouter()
	sync(store, router)
	const app = new Vue({
		router,
		store,
		render: (h) => h(App)
	})
	return { app, router, store }
}
