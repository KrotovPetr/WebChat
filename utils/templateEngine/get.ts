export function get(obj: any, path: string): undefined | string | any {
    const keys: string[] = path.split('.');
    let result: any | string = obj;
    for (let key of keys) {
        let bufKey: RegExpMatchArray | null = key.match(/(\w+)/);
        let value: string | undefined = '';
        if (bufKey) {
            value = result[bufKey[0]];
        }

        if (!value) {
            return undefined;
        }

        result = value;
    }

    return result;
}
