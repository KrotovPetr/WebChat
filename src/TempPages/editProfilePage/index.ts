import { EditPage } from './EditPage';
import { editContext } from './editProfileContext';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const editPage = new EditPage(editContext); //<---отсюда выходит строка
    root.append(editPage.getContent()!);
    editPage.dispatchComponentDidMount();
});
