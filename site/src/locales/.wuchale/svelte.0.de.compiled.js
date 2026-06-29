
                /** @type import('wuchale').CompiledElement[] */
export let c = ["Text","Number","File",[[0],"Checkbox"]]
                // only during dev, for HMR
                let latestVersion = -1
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
            