import { Templator } from './templator';
import { TTemplatorContext } from '../types/types';

export function templatorConnector(
    template: string,
    context: TTemplatorContext,
): string {
    // console.log(template);
    // console.log(context)
    const tmpl: Templator = new Templator(template);
    // console.log(tmpl.compile(context))
    return tmpl.compile(context);
}
