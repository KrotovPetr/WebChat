import { editContext } from './editProfileContext.js'
import { templatorConnector } from '../../../templateEngine/templatorConnector.js'

export function editPage() {
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
            <button class = {{"classNames.formButton"}}><a class={{"classNames.buttonText"}} href={{"links.profileLink"}}>{{"data.button"}}</a></button>
        </form>
        <a class = {{"classNames.linkText"}} href={{"links.profileLink"}}>{{"data.cancel"}}</a>
    </main>
</div>`
}

const template = editPage()
templatorConnector(template, editContext)
