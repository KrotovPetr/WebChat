export type TProfileContext = {
    //названия классов
    classNames: {
        contentContainer: string,
        pageContainer: string,
        optionsContainer: string,
        option: string,
        exitOption: string,
        logo: string,
        login: string,
        characterDescriptionContainer: string,
        character: string,
        characterData: string,
        line: string,
    },
    //общие данные
    data: {
        empty: string,
        exit: string,
        changeData: string,
        phone: string,
        userPhone: string,
        logo: string,
        login: string,
        userLogin: string,
        name: string,
        userName: string,
        surname: string,
        userSurname: string,
        email: string,
        userEmail:
            string,
        password: string,
        button: string,
        createAccount: string,
        changePassword: string,
    },
    //простые функции
    functions: {},
    //ссылки на другие страницы
    links: {
        chatLink: string,
        editLink: string,
    },
}