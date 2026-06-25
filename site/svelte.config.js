import adapterCdk from "@flit/sveltekit-adapter-cdk";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import inlineSvg from "@svelte-put/inline-svg/preprocessor";

export default {
	preprocess: [inlineSvg({ directories: "src/lib/icons" }), vitePreprocess()],
	kit: {
		outDir: "dist/.svelte-kit",
		adapter: adapterCdk({ out: "./dist/cdk" }),
	},
};
