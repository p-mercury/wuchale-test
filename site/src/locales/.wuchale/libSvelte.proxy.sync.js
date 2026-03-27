
            import * as _w_c_libSvelte_0_ from './svelte.svelte.en.compiled.js'
import * as _w_c_libSvelte_1_ from './svelte.svelte.de.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {libSvelte: {en: _w_c_libSvelte_0_,de: _w_c_libSvelte_1_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['libSvelte']
        