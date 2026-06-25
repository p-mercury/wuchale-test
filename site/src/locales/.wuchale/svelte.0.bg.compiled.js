
                /** @type import('wuchale').CompiledElement[] */
export let c = [[[0],"Hello world"],["User status: ",0],[[0]," Hello world"]]
                // only during dev, for HMR
                let latestVersion = -1
                // @ts-ignore
                export function update({ version, data }) {
                    if (latestVersion >= version) {
                        return
                    }
                    for (const [ index, item ] of data['bg'] ?? []) {
                        c[index] = item
                    }
                    latestVersion = version
                }
            