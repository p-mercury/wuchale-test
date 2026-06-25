declare module "svelte/elements" {
	export interface SVGAttributes {
		"inline-src"?: `${string}` | `./${string}` | `../${string}`;
	}
}

export {};
