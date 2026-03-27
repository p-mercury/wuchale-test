import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapterStatic from "@sveltejs/adapter-static";

export default {
	preprocess: [vitePreprocess()],
	kit: {
		outDir: "dist/.svelte-kit",
		adapter: adapterStatic(),
	},
};
