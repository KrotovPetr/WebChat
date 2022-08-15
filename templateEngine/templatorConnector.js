import { Templator } from './templator.js'

//функция-передатчик
export function templatorConnector(template, context) {
    const tmpl = new Templator(template)
    const renderedTemplate = tmpl.compile(context) // Строка с html-вёрсткой
    document.body.innerHTML = renderedTemplate
}
