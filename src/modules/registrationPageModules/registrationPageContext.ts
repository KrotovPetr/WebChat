import { TRegContext } from './types'

export const regContext:TRegContext = {
    //названия классов
    classNames: {
        formContainer: 'formContainer',
        pageContainer: 'pageContainer',
        logo: 'logo',
        form: 'form',
        inputContainer: 'inputContainer',
        inputDescription: 'inputDescription',
        textInput: 'textInput',
        passwordInput: 'passwordInput',
        formButton: 'formButton',
        linkText: 'linkText',
        buttonText: 'buttonText',
    },
    //общие данные
    data: {
        name: 'Имя',
        surname: 'Фамилия',
        phone: 'Телефон',
        email: 'Почта',
        login: 'Логин',
        password: 'Пароль',
        inputName: 'Пётр',
        inputSurname: 'Кротов',
        inputPhone: '88005553535',
        inputEmail: 'petrkrotov2001@mail.ru',
        inputLogin: 'petrkrotov2001@mail.ru',
        inputPassword: '**********',
        button: 'Регистрация',
        isExist: 'Есть аккаунт?',
    },
    //простые функции
    functions: {},
    //ссылки на другие страницы
    links: {
        chatLink: '../chatPage/chatPage.html',
        profileLink: '../profilePage/profilePage.html',
        loginLink: '../loginPage/loginPage.html',
        regLink: '../registrationPage/registrationPage.html',
    },
}
