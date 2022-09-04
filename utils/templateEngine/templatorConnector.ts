import { Templator } from './templator';
import { TTemplatorContext } from '../types/types';

export function templatorConnector(
    template: string,
    context: TTemplatorContext,
): string {
    const tmpl: Templator = new Templator(template);
    return tmpl.compile(context);
}
