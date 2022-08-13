import {Templator} from "./templator.js";


export function templatorConnector(template, context){
    // console.log(context);
    const tmpl = new Templator(template);
    const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой
    document.body.innerHTML = renderedTemplate;
}


