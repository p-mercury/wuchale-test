import { defineConfig } from "wuchale";
import { adapter as svelteAdapter } from "@wuchale/svelte";
import { adapter as jsAdapter } from "wuchale/adapter-vanilla";

export default defineConfig({
	locales: ["en", "de", "bg"],
	adapters: {
		svelte: svelteAdapter({ loader: "sveltekit" }),
		js: jsAdapter({
			loader: "vite",
			files: [
				"src/**/+{page,layout}.{js,ts}",
				"src/**/+{page,layout}.server.{js,ts}",
			],
		}),
		libSvelte: svelteAdapter({
			loader: "sveltekit",
			files: "../../packages/ui-web/dist/**/*.svelte",
		}),
		libJs: jsAdapter({
			loader: "vite",
			files: "../../packages/ui-web/dist/**/*.js",
		}),
	},
});
