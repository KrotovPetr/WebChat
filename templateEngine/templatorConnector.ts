import { Templator } from './templator'
import { TTemplatorContext } from '../utils/types/types'

export function templatorConnector(template:string, context:TTemplatorContext) {
    const tmpl:Templator = new Templator(template)
    document.body.innerHTML = tmpl.compile(context)
}