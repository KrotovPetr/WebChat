import {templatorConnector} from "../../../templateEngine/templatorConnector.js";
import {regContext} from "./registrationPageContext.js";

export function regPage(){
    return `
    <div class = {{"classNames.pageContainer"}}>
    <div class = {{"classNames.formContainer"}}>
        <form class = {{"classNames.form"}}>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.name"}}</p>
                <input class = {{"classNames.textInput"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.surname"}}</p>
                <input class = {{"classNames.textInput"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.login"}}</p>
                <input class = {{"classNames.textInput"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.email"}}</p>
                <input class = {{"classNames.textInput"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.phone"}}</p>
                <input class = {{"classNames.textInput"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.password"}}</p>
                <input class = {{"classNames.passwordInput"}} />
            </div>
            <button class = {{"classNames.formButton"}}><a href={{"links.profileLink"}}>{{"data.button"}}</a></button>

        </form>
        <a class = {{"classNames.linkText"}} href={{"links.loginLink"}}>{{"data.isExist"}}</a>
    </div>
</div>`;
}


const template = regPage();
templatorConnector(template, regContext);