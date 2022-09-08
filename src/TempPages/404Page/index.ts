import { NotFoundPage } from './NotFoundPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const nfPage = new NotFoundPage("1"); //<---отсюда выходит строка
    root.append(nfPage.getContent()!);
    nfPage.dispatchComponentDidMount();
});
