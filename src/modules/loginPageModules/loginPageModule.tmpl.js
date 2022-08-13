import {templatorConnector} from "../../../templateEngine/templatorConnector.js";
import {loginContext} from "./loginPageContext.js";

export function loginPage(){
    return ` <div class = {{"classNames.pageContainer"}}>
    <div class={{"classNames.contentContainer"}}>
        <div class={{"classNames.logo"}}>{{"data.logo"}}</div>
        <form class={{"classNames.form"}}>
            <div class={{"classNames.inputContainer"}}>
                <p class={{"classNames.inputDescription"}}>{{"data.login"}}</p>
                <input class={{"classNames.input"}} />
            </div>
            <div class={{"classNames.inputContainer"}}>
                <p class={{"classNames.inputDescription"}}>{{"data.password"}}</p>
                <input class={{"classNames.passwordInput"}} />
            </div>
            <button class={{"classNames.formButton"}}><a href={{"links.profileLink"}}>{{"data.button"}}</a></button>
        </form>
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.recoverPassword"}}</a>
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.createAccount"}}</a>
    </div>
</div>`;
}


const template = loginPage();
templatorConnector(template, loginContext);