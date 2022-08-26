//модуль страницы ошибок 5**
import { serverErrorContext } from './serverErrorPageContext'
import { templatorConnector } from '../../../templateEngine/templatorConnector'


export function errorPage() {
    return ` <div class = {{"classNames.pageContainer"}}>
        <main class = {{"classNames.contentContainer"}}>
        <h1 class = {{"classNames.header"}}>{{"data.number"}}</h1>
        <p class = {{"classNames.description"}}>{{"data.description"}}</p>
        <a class = {{"classNames.chatLink"}} href = {{"links.chatLink"}}>{{"data.toChatLink"}}</a>
    </main>
</div>`
}

const template:string = errorPage()
templatorConnector(template, serverErrorContext)
