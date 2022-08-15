import {templatorConnector} from "../../../templateEngine/templatorConnector.js";
import {chatContext} from "./chatPageContext.js";

export function chatPage(){
    return `<div class={{"classNames.pageContainer"}}>
    <main class={{"classNames.listOfChats"}}>
        <a href={{"links.profileLink"}}>{{"data.profile"}}</a>
        <p>{{"data.chatsList"}}</p>
        <div class={{"classNames.chatContainer"}}>
            <div class={{"classNames.logo"}}></div>
            <div class={{"classNames.infoContainer"}}>
                <p class={{"classNames.opData"}}>{{"data.opName"}}</p>
                <p class={{"classNames.lastMessage"}}>{{"data.lastMessage"}}</p>
            </div>
            <div class={{"classNames.secondInfoContainer"}}>
                <div class={{"classNames.lastMessageDate"}}>{{"data.lastMessageDate"}}</div>
                <div class={{"classNames.mesIndContainer"}}>{{"data.messageCount"}}</div>
            </div>
        </div>

       </main>
    <div class={{"classNames.chat"}}>{{"data.infoMessage"}}</div>`;
}



const template = chatPage();
templatorConnector(template, chatContext);