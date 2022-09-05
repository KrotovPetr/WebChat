export function chatPage(): string {
    return `
    <main class={{"classNames.pageContainer"}}>
        <div class={{"classNames.listOfChats"}}><a class={{"classNames.profileLink"}} href={{"../profilePageModules/profilePage.pug"}}>Профиль</a>
            <p class={{"classNames.chatsHeader"}}>Список чатов</p>
            <div class={{"classNames.chatContainer"}}>
                <div class={{"classNames.chat"}}>
                <img class={{"classNames.logo"}} src="https://img5.goodfon.ru/original/3000x2000/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" alt="Friend photo"/>
                    <div class={{"classNames.infoContainer"}}>
                        <p class={{"classNames.opData"}}>Геннадий Бурков</p>
                        <p class={{"classNames.lastMessage"}}>Пойдём гулять</p>
                    </div>
                    <div class={{"classNames.secondInfoContainer"}}>
                        <div class={{"classNames.lastMessageDate"}}>12:01</div>
                        <div class={{"classNames.mesIndContainer"}}>1</div>
                    </div>
                </div>
            </div>
             <div class={{"classNames.chatContainer"}}>
                <div class={{"classNames.chat"}}>
                <img class={{"classNames.logo"}} src="https://npk.asou-mo.ru/images/2021/09/16/chu5ugbwgaaslnx.jpg" alt="Friend photo"/>
                    <div class={{"classNames.infoContainer"}}>
                        <p class={{"classNames.opData"}}>Максим Максимов</p>
                        <p class={{"classNames.lastMessage"}}>Тебе Геннадий Бурков писал?</p>
                    </div>
                    <div class={{"classNames.secondInfoContainer"}}>
                        <div class={{"classNames.lastMessageDate"}}>11:33</div>
                        <div class={{"classNames.mesIndContainer"}}>1</div>
                    </div>
                </div>
            </div>
        </div>
        {{chatBlock}}
    </main>`;
}
