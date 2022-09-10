import { EditPage } from './EditPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const editPage = new EditPage({}); //<---отсюда выходит строка
    root.append(editPage.getContent()!);
    editPage.dispatchComponentDidMount();
});
