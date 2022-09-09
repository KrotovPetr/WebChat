import { ServerErrorPage } from './ServerErrorPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const sePage = new ServerErrorPage('1'); //<---отсюда выходит строка
    root.append(sePage.getContent()!);
    sePage.dispatchComponentDidMount();
});
