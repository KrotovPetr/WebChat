export function errorPageTemplate():string {
    return ` <div class = "pageContainer">
        <main class = "contentContainer">
        <h1 class = "header">500</h1>
        <p class = "description">Возникли неполадки, уже работаем</p>
        <a class = "chatLink" href = '../chatPage/chatPage.html'>Вернуться к чатам</a>
    </main>
</div>`;
}
