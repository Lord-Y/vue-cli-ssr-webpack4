<template>
  <div class="hello">
    <PulseLoader
      :loading="loading.loading.active"
      :color="loading.loading.color"
      :size="loading.loading.size"
    />
    <h1>{{ msg }} - {{ env }}</h1>
    <p>It's time for you to integrate it into your application</p>
    <p>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</template>

<script>
import { PulseLoader } from "@saeris/vue-spinners";

export default {
	name: "HelloWorld",
	components: {
		PulseLoader
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
		};
	},
	data() {
		return {
			msg: "Welcome to Your SSR Template",
			env: process.env.NODE_ENV,
			meta: {
				title: "Welcome to Your SSR Template",
				description: "Yolooo"
			},
			loading: {
				loading: {
					active: true,
					size: 15,
					color: "#26c185"
				}
			}
		};
	}
};
</script>

<style scoped>
h1,
h2 {
	font-weight: normal;
}
</style>
