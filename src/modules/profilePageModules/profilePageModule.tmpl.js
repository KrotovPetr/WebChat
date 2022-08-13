import {profileContext} from "./profilePageContext.js";
import {templatorConnector} from "../../../templateEngine/templatorConnector.js";

export function profilePage(){
    return`<div class={{"classNames.pageContainer"}}>
        <div class={{"classNames.contentContainer"}}>
            <div class={{"classNames.logo"}}>{{"data.logo"}}</div>
            <p class={{"classNames.login"}}>{{"data.userLogin"}}</p>

            <div class={{"classNames.characterDescriptionContainer"}}>
                <p class={{"classNames.character"}}>{{"data.email"}}</p>
                <p class={{"classNames.characterData"}}>{{"data.userEmail"}}</p>
            </div>
            <div class={{"classNames.line"}}></div>
            <div class={{"classNames.characterDescriptionContainer"}}>
                <p class={{"classNames.character"}}>{{"data.login"}}</p>
                <p class={{"classNames.characterData"}}>{{"data.userLogin"}}</p>
            </div>
            <div class={{"classNames.line"}}></div>
            <div class={{"classNames.characterDescriptionContainer"}}>
                <p class={{"classNames.character"}}>{{"data.name"}}</p>
                <p class={{"classNames.characterData"}}>{{"data.userName"}}</p>
            </div>
            <div class={{"classNames.line"}}></div>
            <div class={{"classNames.characterDescriptionContainer"}}>
                <p class={{"classNames.character"}}>{{"data.surname"}}</p>
                <p class={{"classNames.characterData"}}>{{"data.userSurname"}}</p>
            </div>
            <div class={{"classNames.line"}}></div>
            <div class={{"classNames.characterDescriptionContainer"}}>
                <p class={{"classNames.character"}}>{{"data.phone"}}</p>
                <p class={{"classNames.characterData"}}>{{"data.userPhone"}}</p>
            </div>
            <div class={{"classNames.line"}}></div>
            <div class={{"classNames.optionsContainer"}}>
                <p class={{"classNames.option"}}>{{"data.changePassword"}}</p>
                <a class={{"classNames.option"}} href={{"links.editLink"}}>{{"data.changeData"}}</a>
                <a class={{"classNames.exitOption"}} href={{"links.chatLink"}}>{{"data.exit"}}</a>
            </div>
        </div>
    </div>`}

const template = profilePage();
templatorConnector(template, profileContext);