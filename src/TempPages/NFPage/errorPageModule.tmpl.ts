//одуль ошибок 4**
import { errorContext } from './errorPageContext';
import { TErrorContext } from './types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';

export function errorPage(): string {
    return ` <div class = {{"classNames.pageContainer"}}>
        <main class = {{"classNames.contentContainer"}}>
        <h1 class = {{"classNames.header"}}>{{"data.number"}}</h1>
        <p class = {{"classNames.description"}}>{{"data.description"}}</p>
        <a class = {{"classNames.chatLink"}} href = {{"links.chatLink"}}>{{"data.toChatLink"}}</a>
    </main>
</div>`;
}
