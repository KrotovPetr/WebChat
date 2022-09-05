export function loginPage(): string {
    return ` <div class = {{"classNames.pageContainer"}}>
    <main class={{"classNames.contentContainer"}}>
        <img class={{"classNames.logo"}} src={{"links.picLink"}} alt="WebChat logo"/>
        {{"loginForm"}}
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.recoverPassword"}}</a>
        <a class={{"classNames.linkText"}} href={{"links.regLink"}}>{{"data.createAccount"}}</a>
    </main>
</div>`;
}
