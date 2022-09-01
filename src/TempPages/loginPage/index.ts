import { loginContext } from './loginPageContext';
import { LoginPage } from './LoginPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const loginPage = new LoginPage(loginContext); //<---отсюда выходит строка
    root.append(loginPage.getContent()!);
    loginPage.dispatchComponentDidMount();
});
