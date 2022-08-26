
import { loginContext } from './loginPageContext'
import { templatorConnector } from '../../../templateEngine/templatorConnector'


export function loginPage():string {
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

const template:string = loginPage()
templatorConnector(template, loginContext)
