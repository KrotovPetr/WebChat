export function chatPageTemplate(): string {
    return `
    <main class="pageContainer">
        <div class="listOfChats"><a class="profileLink" href="../profilePage/profilePage.html">Профиль</a>
            <p class="chatsHeader">Список чатов</p>
            <div class="chatContainer">
                <div class="chat">
                <img class="logo" src="https://img5.goodfon.ru/original/3000x2000/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" alt="Friend photo"/>
                    <div class="infoContainer">
                        <p class="opData">Геннадий Бурков</p>
                        <p class="lastMessage">Пойдём гулять</p>
                    </div>
                    <div class="secondInfoContainer">
                        <time class="lastMessageDate">12:01</time>
                        <div class="mesIndContainer">1</div>
                    </div>
                </div>
            </div>
             <div class="chatContainer">
                <div class="chat">
                <img class="logo" src="https://npk.asou-mo.ru/images/2021/09/16/chu5ugbwgaaslnx.jpg" alt="Friend photo"/>
                    <div class="infoContainer">
                        <p class="opData">Максим Максимов</p>
                        <p class="lastMessage">Тебе Геннадий Бурков писал?</p>
                    </div>
                    <div class="secondInfoContainer">
                        <time class="lastMessageDate">11:33</time>
                        <div class="mesIndContainer">1</div>
                    </div>
                </div>
            </div>
        </div>
        {{chatBlock}}
    </main>`;
}
