export type TChatContext = {
    classNames: {
        pageContainer: string;
        listOfChats: string;
        chatContainer: string;
        logo: string;
        infoContainer: string;
        opData: string;
        lastMessage: string;
        secondInfoContainer: string;
        lastMessageDate: string;
        mesIndContainer: string;
        profileLink: string;
        chatsHeader: string;
        chat: string;
    };

    data: {
        profile: string;
        chatsList: string;
        opName: string;
        lastMessage: string;
        lastMessageDate: string;
        messageCount: string;
        infoMessage: string;
        logo: string;
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
