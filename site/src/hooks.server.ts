import * as Js from "./locales/js.loader.server";
import * as LibJs from "./locales/libJs.loader.server";
import * as LibSvelte from "./locales/libSvelte.loader.server.svelte";
import * as Svelte from "./locales/svelte.loader.server.svelte";
import { locales } from "./locales/data";
import type { Handle } from "@sveltejs/kit";
import { runWithLocale, loadLocales } from "wuchale/load-utils/server";

loadLocales(Js.key, Js.loadIDs, Js.loadCatalog, locales);
loadLocales(LibJs.key, LibJs.loadIDs, LibJs.loadCatalog, locales);
loadLocales(LibSvelte.key, LibSvelte.loadIDs, LibSvelte.loadCatalog, locales);
loadLocales(Svelte.key, Svelte.loadIDs, Svelte.loadCatalog, locales);

export const handle: Handle = async ({ event, resolve }) => {
	const locale = event.url.searchParams.get("locale") ?? "en";
	return await runWithLocale(locale, () => resolve(event));
};
