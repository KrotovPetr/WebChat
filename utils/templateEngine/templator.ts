import { get } from './get';
import { repeatString } from './repeatString';
import { changeSpecFunctions } from './changeSpecFunctions';

//образец собственного шаблонизатора

export class Templator {
    _TEMPLATE_REGULAR_EXPRESSION = /{{(.*?)}}/gi;
    _template: string;
    constructor(template: string) {
        this._template = template;
    }

    compile(ctx: any) {
        return this._compileTemplate(this._template, ctx);
    }

    _compileTemplate(template: string, ctx: any) {
        // console.log(ctx)
        let tmpl: string = template;
        let key: null | RegExpExecArray = null;
        const regExp: RegExp = this._TEMPLATE_REGULAR_EXPRESSION;
        tmpl = changeSpecFunctions(tmpl, ctx);
        let tmpl2: string = tmpl; //<-- был баг в коде с теории, некоторые переменные не отрабатывались регуляркой, вопрос решился введением копии, дабы н зацикливаться и не пропускать данные

        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const data: string | any | undefined = get(ctx, key[1]);
                let myRegExp: RegExp = new RegExp(key[0], 'gi');
                if (typeof data === 'string') {
                    tmpl2 = tmpl2.replace(myRegExp, data);
                }
            }
        }
        // console.log(tmpl2)
        return tmpl2;
    }
}
