export type TErrorContext = {
    classNames: {
        contentContainer: string;
        pageContainer: string;
        description: string;
        header: string;
        chatLink: string;
    };
    //общие данные
    data: {
        number: string;
        description: string;
        toChatLink: string;
    };
    //простые функции
    functions: {};
    //ссылки на другие страницы
    links: {
        chatLink: string;
    };
};
