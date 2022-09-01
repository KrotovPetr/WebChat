import { TTemplatorContext } from '../types/types';

export function get(
    obj: TTemplatorContext,
    path: string,
): undefined | string | TTemplatorContext {
    const keys: string[] = path.split('.');
    let result: TTemplatorContext | string = obj;
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
