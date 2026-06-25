
            import * as _w_c_0_0_ from './svelte.0.en.compiled.js'
import * as _w_c_0_1_ from './svelte.0.de.compiled.js'
import * as _w_c_0_2_ from './svelte.0.bg.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @type {{[locale: string]: CatalogMod[]}} */
            const catalogs = {en: [_w_c_0_0_],de: [_w_c_0_1_],bg: [_w_c_0_2_]}
            export const loadCatalog = (/** @type {number} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {CatalogMod[]} */ (catalogs[locale])[loadID])
            }
            export const loadCount = 1
            // not essential. in case it is needed and for debugging
            export const patterns = ["libJs"]
        