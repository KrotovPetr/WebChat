import { templatorConnector } from '../../../templateEngine/templatorConnector.js'
import { loginContext } from './loginPageContext.js'

export function loginPage() {
    return ` <div class = {{"classNames.pageContainer"}}>
    <main class={{"classNames.contentContainer"}}>
        <img class={{"classNames.logo"}} />
        <form class={{"classNames.form"}}>
            <div class={{"classNames.inputContainer"}}>
                <p class={{"classNames.inputDescription"}}>{{"data.login"}}</p>
                <input class={{"classNames.input"}} value={{"data.loginValue"}} />
            </div>
            <div class={{"classNames.inputContainer"}}>
                <p class={{"classNames.inputDescription"}}>{{"data.password"}}</p>
                <input class={{"classNames.passwordInput"}} value={{"data.passwordValue"}} />
            </div>
            <button class={{"classNames.formButton"}}><a class={{"classNames.buttonText"}} href={{"links.profileLink"}}>{{"data.button"}}</a></button>
        </form>
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.recoverPassword"}}</a>
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.createAccount"}}</a>
    </main>
</div>`
}

const template = loginPage()
templatorConnector(template, loginContext)
