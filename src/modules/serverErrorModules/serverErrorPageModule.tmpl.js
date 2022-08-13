//модуль страницы ошибок 5**

import {templatorConnector} from "../../../templateEngine/templatorConnector.js";
import {serverErrorContext} from "./serverErrorPageContext.js";

export function errorPage(){
    return ` <div class = {{"classNames.pageContainer"}}>
        <div class = {{"classNames.contentContainer"}}>
        <h1>{{"data.number"}}</h1>
        <p>{{"data.description"}}</p>
        <a href = {{"links.chatLink"}}>{{"data.toChatLink"}}</a>
    </div>
</div>`;
}


const template = errorPage();
const context = serverErrorContext;
templatorConnector(template, context);