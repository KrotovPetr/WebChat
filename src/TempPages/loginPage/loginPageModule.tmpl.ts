export function loginPageTemplate(): string {
    return ` <div class = "pageContainer">
    <main class="contentContainer">
        <img class="logo" src='../../../utils/pict/telegram.png' alt="WebChat logo"/>
        {{loginForm}}
        <a class="linkText" href='../registrationPage/registrationPage.html'>Восстановить пароль</a>
        <a class="linkText" href='../registrationPage/registrationPage.html'>Создать аккаунт</a>
    </main>
</div>`;
}
