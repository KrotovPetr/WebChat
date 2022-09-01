import { profileContext } from './profilePageContext';
import { ProfilePage } from './ProfilePage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const profilePage = new ProfilePage(profileContext); //<---отсюда выходит строка
    root.append(profilePage.getContent()!);
    profilePage.dispatchComponentDidMount();
});
