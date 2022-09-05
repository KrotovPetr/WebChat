/**
 * Возвращает html разметку блока разговора с собеседником
 * @return string
 *
 */
export function chatBlock(): string {
    return `
            <div class="chatHeader"><img class="logo" src="https://img5.goodfon.ru/original/3000x2000/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" alt='Friend photo'/>
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
            <div class="chatFooter"><input class="messageInput" type="text" placeholder="Введите сообщение" />
            {{"send_button"}}
            </div>
        `;
}
