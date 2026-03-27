
                /** @type import('wuchale').CompiledElement[] */
export let c = ["Hallo Welt",["Benutzerstatus: ",0]]
                // only during dev, for HMR
                let latestVersion = 13
                // @ts-ignore
                export function update({ version, data }) {
                    if (latestVersion >= version) {
                        return
                    }
                    for (const [ index, item ] of data['de'] ?? []) {
                        c[index] = item
                    }
                    latestVersion = version
                }
            