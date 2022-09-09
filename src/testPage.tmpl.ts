import { templatorConnector } from '../utils/templateEngine/templatorConnector';

export function testPageTemplate(): string {
    // console.log(str)
    return `<div class = "pageContainer">
<main class = "contentContainer">
<h1 class = "header">1</h1>
    {{#if escapes}}
           {{#each goodbye}}
                <h3 class = "header">{{this}}</h3>
           {{/each goodbye}}
    {{#else escapes}}
             {{#each goodbye2}}
                <h2 class = "header">{{this}}</h2>
            {{/each goodbye2}}
    {{/if escapes}}

    <p class = "description">Возникли неполадки, уже работаем</p>
<a class = "chatLink" href = '../chatPage/chatPage.html'>Вернуться к чатам</a>
</main>`;
}

const template = testPageTemplate();
const context = {
    "escapes": ()=>{return false},
    goodbye2: [1,2,3,4,5,6]
};
templatorConnector(template, context);
