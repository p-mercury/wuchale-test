import type { LayoutLoad } from "./$types";
import { loadLocale } from "wuchale/load-utils";
import { browser } from "$app/environment";

import "./../locales/js.loader";
import "./../locales/libJs.loader";
import "./../locales/libSvelte.loader.svelte";
import "./../locales/svelte.loader.svelte";
import { locales } from "./../locales/data";

export const load: LayoutLoad = async ({ url }) => {
	const locale = url.searchParams.get("locale") ?? "en";
	if (browser && locales.includes(locale as any)) {
		await loadLocale(locale);
	}
};
