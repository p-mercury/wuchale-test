import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vitest/config";
import { wuchale } from "wuchale";

export default defineConfig({
	clearScreen: false,
	plugins: [
		wuchale(),
		sveltekit(),
		basicSsl({
			certDir: "dist",
		}),
	],
	server: {
		strictPort: true,
		host: false,
		port: 5173,
	},
});
