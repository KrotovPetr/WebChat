import { templatorConnector } from '../utils/templateEngine/templatorConnector';

export function testPageTemplate(str:string):string{
    // console.log(str)
    return str;
}
let str = `<h1>Тестовая фигня</h1>{{#each array}}<div class="characterDescriptionContainer"><p class="character">{{this}}</p></div>{{/each array}}<h1>Тестовая фигня закончилась</h1>
`

const template = testPageTemplate(str)
const context = ["1",2,3,4,5,6,7,8];
templatorConnector(template, context)