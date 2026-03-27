import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { wuchale } from "wuchale/vite";

export default defineConfig({
	clearScreen: false,
	plugins: [wuchale(), sveltekit()],
	server: {
		strictPort: true,
		host: false,
		port: 5178,
	},
});
