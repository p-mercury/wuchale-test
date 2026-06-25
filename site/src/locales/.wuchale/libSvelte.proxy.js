
            
            /** @typedef {() => Promise<import("wuchale/runtime").CatalogModule>} CatalogMod */
            /** @type {{[locale: string]: CatalogMod[]}} */
            const catalogs = {en: [() => import('./svelte.0.en.compiled.js')],de: [() => import('./svelte.0.de.compiled.js')],bg: [() => import('./svelte.0.bg.compiled.js')]}
            export const loadCatalog = (/** @type {number} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {CatalogMod[]} */ (catalogs[locale])[loadID])()
            }
            export const loadCount = 1
            // not essential. in case it is needed and for debugging
            export const patterns = ["libSvelte"]
        