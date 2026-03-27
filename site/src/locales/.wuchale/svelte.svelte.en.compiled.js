
                /** @type import('wuchale').CompiledElement[] */
export let c = ["Hello world",["User status: ",0]]
                // only during dev, for HMR
                let latestVersion = 13
                // @ts-ignore
                export function update({ version, data }) {
                    if (latestVersion >= version) {
                        return
                    }
                    for (const [ index, item ] of data['en'] ?? []) {
                        c[index] = item
                    }
                    latestVersion = version
                }
            