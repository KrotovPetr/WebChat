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
        </div>
        <div class="chatExContainer">
            <div class="chatHeader"><img class={{"classNames.logo"}} src="https://img5.goodfon.ru/original/3000x2000/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" />
                <p class="friendLogin">Константинопольский Константин Константинович</p><span class="material-symbols-outlined">more_vert</span>
            </div>
            <div class="chatMainPart">
                <div class="chatMainPartArea">
                    <div class="friendMessageContainer">
                        <p class="messageText">Аналогия, конечно, откровенна. Интересно отметить, что гравитационный парадокс решительно раскладывает на элементы неоднозначный дедуктивный метод, tertium nоn datur. Позитивизм выводит закон исключённого третьего, отрицая очевидное. Платоновская академия, как следует из вышесказанного, амбивалентно подрывает гений, не учитывая мнения авторитетов. Заблуждение порождает и обеспечивает трансцендентальный дуализм, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.</p>
                        <p class="messageTime">11:59</p>
                    </div>
                    <div class="myMessageContainer">
                        <p class="messageText">Очень приятно)</p>
                        <p class="messageTime">12:01</p>
                    </div>
                     <div class="friendMessageContainer">
                        <p class="messageText">Аналогия, конечно, откровенна. Интересно отметить, что гравитационный парадокс решительно раскладывает на элементы неоднозначный дедуктивный метод, tertium nоn datur. Позитивизм выводит закон исключённого третьего, отрицая очевидное. Платоновская академия, как следует из вышесказанного, амбивалентно подрывает гений, не учитывая мнения авторитетов. Заблуждение порождает и обеспечивает трансцендентальный дуализм, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.</p>
                        <p class="messageTime">11:59</p>
                    </div>
                    <div class="myMessageContainer">
                        <p class="messageText">Очень приятно)</p>
                        <p class="messageTime">12:01</p>
                    </div>
                     <div class="friendMessageContainer">
                        <p class="messageText">Аналогия, конечно, откровенна. Интересно отметить, что гравитационный парадокс решительно раскладывает на элементы неоднозначный дедуктивный метод, tertium nоn datur. Позитивизм выводит закон исключённого третьего, отрицая очевидное. Платоновская академия, как следует из вышесказанного, амбивалентно подрывает гений, не учитывая мнения авторитетов. Заблуждение порождает и обеспечивает трансцендентальный дуализм, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.</p>
                        <p class="messageTime">11:59</p>
                    </div>
                    <div class="myMessageContainer">
                        <p class="messageText">Очень приятно)</p>
                        <p class="messageTime">12:01</p>
                    </div>
                </div>
            </div>
            <div class="chatFooter"><input class="messageInput" type="text" placeholder="Введите сообщение" /><button class="inputMessageButton">
            <span class="material-symbols-outlined">arrow_forward</span>
            </button></div>
        </div>
    </main>`;
}
