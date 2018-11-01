// app.js
import Vue from "vue"
import App from "./App.vue"
import { createStore } from "@store"
import { createRouter } from "@router"
import { sync } from "vuex-router-sync"
import VueMeta from "vue-meta"
Vue.use(VueMeta)
import * as filters from "@filters/filters"
Vue.config.debug = false

// register global utility filters.
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
})

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
