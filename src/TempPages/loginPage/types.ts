export type TLoginContext = {
    classNames: {
        contentContainer: string;
        pageContainer: string;
        logo: string;
        form: string;
        inputContainer: string;
        inputDescription: string;
        input: string;
        passwordInput: string;
        formButton: string;
        linkText: string;
        buttonText: string;
    };
    //общие данные
    data: {
        logo: string;
        login: string;
        password: string;
        button: string;
        createAccount: string;
        recoverPassword: string;
        loginValue: string;
        passwordValue: string;
    };
    //простые функции
    functions: {};
    //ссылки на другие страницы
    links: {
        chatLink: string;
        profileLink: string;
        regLink: string;
        picLink: string;
    };
};
