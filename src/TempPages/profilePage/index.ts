import { ProfilePage } from './ProfilePage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const profilePage = new ProfilePage('1'); //<---отсюда выходит строка
    root.append(profilePage.getContent()!);
    profilePage.dispatchComponentDidMount();
});
