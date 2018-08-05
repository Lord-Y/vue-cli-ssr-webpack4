<template>
  <div class="hello">
    <rotate-square2></rotate-square2>
    <cube-shadow></cube-shadow>
    <pulse-loader></pulse-loader>
    <h1>{{ msg }} - {{env}} - {{rangeLimit}}</h1>
    <p>It's time for you to integrate it into your application</p>
    <p>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</template>

<script>
import { RotateSquare2,
	CubeShadow } from "vue-loading-spinner"
import PulseLoader from "vue-spinner/src/PulseLoader.vue"

export default {
	name: "HelloWorld",
	components: {
		RotateSquare2,
		CubeShadow,
		PulseLoader
	},
	head: {
		title() {
			return "Hello world"
		},
		meta: [
			{ name: "description", content: "summary" },
			{ name: "keywords", content: "summary" },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:site", content: "@jqEmprendedorVE" },
			{ name: "twitter:creator", content: "@jqEmprendedorVE" },
			{ name: "twitter:url", content: "https://vue-firebase-ssr.firebaseapp.com" },
			{ name: "twitter:description", content: "Modelo de Vuejs SSR con Firebase Cloud Function + Hosting" },
			{ name: "twitter:image", content: "https://www.filepicker.io/api/file/nS7a8itSTcaAsyct6rVp" },
			{ property: "og:title", content: "summary" },
			{ property: "og:type", content: "summary" },
			{ property: "og:url", content: "summary" },
			{ property: "og:image", content: "summary" },
			{ property: "twitter:card", content: "summary" }
		]
	},
	data() {
		return {
			msg: "Welcome to Your SSR Template",
			env: process.env.NODE_ENV,
			rangeLimit: process.env.RANGE_LIMIT,
			loading: {
				loading: {
					active: false,
					size: "15px",
					color: "#26c185"
				}
			}
		}
	},
	mounted() {
		console.log(process.env, process.env.RANGE_LIMIT)
	}
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
</style>
