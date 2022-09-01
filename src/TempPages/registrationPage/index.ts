import { regContext } from './registrationPageContext';
import { RegistrationPage } from './RegistrationPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const regPage = new RegistrationPage(regContext); //<---отсюда выходит строка
    root.append(regPage.getContent()!);
    regPage.dispatchComponentDidMount();
});
