import { defineConfig } from "wuchale";
import { adapter as svelte } from "@wuchale/svelte";

export default defineConfig({
	locales: {
		en: { name: "English" },
		de: { name: "German" },
	},
	adapters: {
		main: svelte(),
	},
});
