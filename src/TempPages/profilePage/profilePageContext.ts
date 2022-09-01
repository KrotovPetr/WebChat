import { TProfileContext } from './types';

export const profileContext: TProfileContext = {
    //названия классов
    classNames: {
        contentContainer: 'contentContainer',
        pageContainer: 'pageContainer',
        optionsContainer: 'optionsContainer',
        option: 'option',
        exitOption: 'exitOption',
        logo: 'logo',
        login: 'login',
        characterDescriptionContainer: 'characterDescriptionContainer',
        character: 'character',
        characterData: 'characterData',
        line: 'line',
    },
    //общие данные
    data: {
        empty: '',
        exit: 'Выйти',
        changeData: 'Изменить данные',
        phone: 'Телефон',
        userPhone: '80005553535',
        logo: 'Картинка',
        login: 'Логин',
        userLogin: 'konstantinopolskykonstantinatorprocrastinator3000',
        name: 'Имя',
        userName: 'Константин',
        surname: 'Фамилия',
        userSurname: 'Константинопольский',
        email: 'Почта',
        userEmail:
            'konstantinopolskykonstantinatorprocrastinator3000@yandex.ru',
        password: 'Пароль',
        button: 'Войти',
        createAccount: 'Создать аккаунт',
        changePassword: 'Изменить пароль',
    },
    //простые функции
    functions: {},
    //ссылки на другие страницы
    links: {
        chatLink: '../chatPage/chatPage.html',
        editLink: '../editProfilePage/editProfilePage.html',
    },
};
