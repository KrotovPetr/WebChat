import {errorContext} from "./errorPageContext.js";
import {templatorConnector} from "../../../templateEngine/templatorConnector.js";

//одуль ошибок 4**
export function errorPage(){
    return ` <div class = {{"classNames.pageContainer"}}>
        <main class = {{"classNames.contentContainer"}}>
        <h1>{{"data.number"}}</h1>
        <p>{{"data.description"}}</p>
        <a href = {{"links.chatLink"}}>{{"data.toChatLink"}}</a>
    </main>
</div>`;
}

const template = errorPage();
const context = errorContext;
templatorConnector(template, context);