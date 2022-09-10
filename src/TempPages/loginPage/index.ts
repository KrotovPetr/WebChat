import { LoginPage } from './LoginPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const loginPage = new LoginPage('1'); //<---отсюда выходит строка
    root.append(loginPage.getContent()!);
    loginPage.dispatchComponentDidMount();
});
