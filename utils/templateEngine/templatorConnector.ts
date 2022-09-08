import { Templator } from './templator';

export function templatorConnector(
    template: string,
    context: any,
): string {
    const tmpl: Templator = new Templator(template);
    return tmpl.compile(context);
}

// export function templatorConnector(template:any, context:any) {
//     const tmpl = new Templator(template)
//     const renderedTemplate = tmpl.compile(context) // Строка с html-вёрсткой
//     // console.log(renderedTemplate)
//     document.body.innerHTML = renderedTemplate
// }