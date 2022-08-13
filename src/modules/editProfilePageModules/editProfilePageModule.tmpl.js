import {editContext} from "./editProfileContext.js";
import {templatorConnector} from "../../../templateEngine/templatorConnector.js";


export function editPage(){
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
            <button class = {{"classNames.formButton"}}><a href={{"links.profileLink"}}>{{"data.button"}}</a></button>
        </form>
        <a class = {{"classNames.linkText"}} href={{"links.loginLink"}}>{{"data.cancel"}}</a>
    </div>
</div>`;
}


const template = editPage();
templatorConnector(template, editContext);