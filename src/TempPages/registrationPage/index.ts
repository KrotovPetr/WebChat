import { RegistrationPage } from './RegistrationPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const regPage = new RegistrationPage('1'); //<---отсюда выходит строка
    root.append(regPage.getContent()!);
    regPage.dispatchComponentDidMount();
});
