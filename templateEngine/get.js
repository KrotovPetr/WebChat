//функция для выдачи значений из хранилища

export function get(obj, path) {
    const keys = path.split('.')
    let result = obj
    for (let key of keys) {
        let bufKey = key.match(/(\w+)/)[0]
        const value = result[bufKey]

        if (!value) {
            return undefined
        }

        result = value
    }

    return result
}
