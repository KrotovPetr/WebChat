import { NotFoundPage } from './NotFoundPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const nfPage:NotFoundPage = new NotFoundPage({}); //<---отсюда выходит строка
    root.append(nfPage.getContent()!);
    nfPage.dispatchComponentDidMount();
});
