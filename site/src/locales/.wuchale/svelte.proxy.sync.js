
            import * as _w_c_svelte_0_ from './svelte.svelte.en.compiled.js'
import * as _w_c_svelte_1_ from './svelte.svelte.de.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {svelte: {en: _w_c_svelte_0_,de: _w_c_svelte_1_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['svelte']
        