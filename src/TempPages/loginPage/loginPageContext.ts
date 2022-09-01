import { TLoginContext } from './types';

export const loginContext: TLoginContext = {
    //названия классов
    classNames: {
        contentContainer: 'contentContainer',
        pageContainer: 'pageContainer',
        logo: 'logo',
        form: 'form',
        inputContainer: 'inputContainer',
        inputDescription: 'inputDescription',
        input: 'input',
        passwordInput: 'passwordInput',
        formButton: 'formButton',
        linkText: 'linkText',
        buttonText: 'buttonText',
    },
    //общие данные
    data: {
        logo: 'utils/pict/telegram.png',
        login: 'Логин',
        password: 'Пароль',
        button: 'Войти',
        createAccount: 'Создать аккаунт',
        recoverPassword: 'Восстановить пароль',
        loginValue: 'konstantinopolskiykonstantin@yandex.ru',
        passwordValue: '****************',
    },
    //простые функции
    functions: {},
    //ссылки на другие страницы
    links: {
        chatLink: '../chatPage/chatPage.html',
        profileLink: '../profilePage/profilePage.html',
        regLink: '../registrationPage/registrationPage.html',
    },
};
