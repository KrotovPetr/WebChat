//одуль ошибок 4**

export function errorPageTemplate(): string {
    return ` <div class = "pageContainer">
        <main class = "contentContainer">
        <h1 class = "header">404</h1>
        <p class = "description">Не найдено такой страницы</p>
        <a class = "chatLink" href =  '../chatPage/chatPage.html'>Вернуться к чатам</a>
    </main>
</div>`;
}
