import { defineConfig } from "wuchale";
import { adapter as svelteAdapter } from "@wuchale/svelte";
import { adapter as jsAdapter } from "wuchale/adapter-vanilla";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const uiWebRoot = path.dirname(
	require.resolve("@wuchale-test/library/package.json"),
);

export default defineConfig({
	locales: ["en", "de"],
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
			files: path.join(uiWebRoot, "dist/**/*.svelte"),
		}),
		libJs: jsAdapter({
			loader: "vite",
			files: path.join(uiWebRoot, "dist/**/*.{js,ts}"),
		}),
	},
});
