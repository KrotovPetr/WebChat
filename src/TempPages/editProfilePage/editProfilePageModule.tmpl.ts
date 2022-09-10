export function editPageTemplate(): string {
    return `
    <div class = "pageContainer">
    <main class = "formContainer">
        {{editForm}}
        <a class = "linkText" href="../profilePage/profilePage.html">Отмена</a>
    </main>
</div>`;
}
