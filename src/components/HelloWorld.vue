<template>
  <div class="hello">
    <PulseLoader />
    <h1>{{ msg }} - {{ env }} - {{ rangeLimit }}</h1>
    <p>It's time for you to integrate it into your application</p>
    <p>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</template>

<script>
export default {
	name: "HelloWorld",
	components: {
		PulseLoader: () => import("vue-spinner/src/PulseLoader.vue")
	},
	metaInfo() {
		return {
			title: this.meta.title,
			meta: [
				{
					vmid: "description",
					name: "description",
					content: this.meta.description
				}
			]
		}
	},
	data() {
		return {
			msg: "Welcome to Your SSR Template",
			env: process.env.NODE_ENV,
			rangeLimit: process.env.RANGE_LIMIT,
			meta: {
				title: "Welcome to Your SSR Template",
				description: "Yolooo"
			},
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
		// if you want to updated title after page loaded
		// this.meta.title = "test"
	}
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
</style>
