import { EditPage } from './EditPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const editPage = new EditPage('1'); //<---отсюда выходит строка
    root.append(editPage.getContent()!);
    editPage.dispatchComponentDidMount();
});
