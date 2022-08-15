import {templatorConnector} from "../../../templateEngine/templatorConnector.js";
import {regContext} from "./registrationPageContext.js";

export function regPage(){
    return `
    <div class = {{"classNames.pageContainer"}}>
    <main class = {{"classNames.formContainer"}}>
        <form class = {{"classNames.form"}}>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.name"}}</p>
                <input class = {{"classNames.textInput"}} value={{"data.inputName"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.surname"}}</p>
                <input class = {{"classNames.textInput"}} value={{"data.inputSurname"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.login"}}</p>
                <input class = {{"classNames.textInput"}} value={{"data.inputLogin"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.email"}}</p>
                <input class = {{"classNames.textInput"}} value={{"data.inputEmail"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.phone"}}</p>
                <input class = {{"classNames.textInput"}} value={{"data.inputPhone"}} />
            </div>
            <div class = {{"classNames.inputContainer"}}>
                <p class = {{"classNames.inputDescription"}}>{{"data.password"}}</p>
                <input class = {{"classNames.passwordInput"}} value={{"data.inputPassword"}} />
            </div>
            <button class = {{"classNames.formButton"}}><a href={{"links.profileLink"}}>{{"data.button"}}</a></button>

        </form>
        <a class = {{"classNames.linkText"}} href={{"links.loginLink"}}>{{"data.isExist"}}</a>
    </main>
</div>`;
}


const template = regPage();
templatorConnector(template, regContext);