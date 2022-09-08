import { Templator } from './templator';

export function templatorConnector(
    template: string,
    context: any,
): string {
    const tmpl: Templator = new Templator(template);
    return tmpl.compile(context);
}
