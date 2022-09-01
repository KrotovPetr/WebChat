export type TRegContext = {
    //названия классов
    classNames: {
        formContainer: string;
        pageContainer: string;
        logo: string;
        form: string;
        inputContainer: string;
        inputDescription: string;
        textInput: string;
        passwordInput: string;
        formButton: string;
        linkText: string;
        buttonText: string;
    };
    //общие данные
    data: {
        name: string;
        surname: string;
        phone: string;
        email: string;
        login: string;
        password: string;
        inputName: string;
        inputSurname: string;
        inputPhone: string;
        inputEmail: string;
        inputLogin: string;
        inputPassword: string;
        button: string;
        isExist: string;
    };
    //простые функции
    functions: {};
    //ссылки на другие страницы
    links: {
        chatLink: string;
        profileLink: string;
        loginLink: string;
        regLink: string;
    };
};
