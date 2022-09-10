export function profilePageTemplate(): string {
    return `<div class="pageContainer">
        <main class="contentContainer">
            <img class="logo" src='https://img5.goodfon.ru/original/3000x2000/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg' alt='Лого'/>
            <p class="login">konstantinopolskykonstantinatorprocrastinator3000</p>

            <div class="characterDescriptionContainer">
                <p class="character">Почта</p>
                <p class="characterData">konstantinopolskykonstantinatorprocrastinator3000@yandex.ru</p>
            </div>
            <div class="line"></div>
            <div class="characterDescriptionContainer">
                <p class="character">Логин</p>
                <p class="characterData">konstantinopolskykonstantinatorprocrastinator3000</p>
            </div>
            <div class="line"></div>
            <div class="characterDescriptionContainer">
                <p class="character">Имя</p>
                <p class="characterData">Пётр</p>
            </div>
            <div class="line"></div>
            <div class="characterDescriptionContainer">
                <p class="character">Фамилия</p>
                <p class="characterData">Кротов</p>
            </div>
            <div class="line"></div>
            <div class="characterDescriptionContainer">
                <p class="character">Телефон</p>
                <p class="characterData">88005553535</p>
            </div>
            <div class="line"></div>
            <div class="optionsContainer">
                <p class="option">Изменить пароль</p>
                <a class="option" href='../editProfilePage/editProfilePage.html'>Изменить данные</a>
                <a class="exitOption" href='../chatPage/chatPage.html'>Выйти</a>
            </div>
        </main>
    </div>`;
}
