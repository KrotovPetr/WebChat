export function regPage() {
    return `
    <div class = {{"classNames.pageContainer"}}>
    <main class = {{"classNames.formContainer"}}>
       {{"regForm"}}
        <a class = {{"classNames.linkText"}} href={{"links.loginLink"}}>{{"data.isExist"}}</a>
    </main>
</div>`;
}
