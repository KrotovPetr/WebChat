import { ServerErrorPage } from './ServerErrorPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const sePage = new ServerErrorPage({}); //<---отсюда выходит строка
    root.append(sePage.getContent()!);
    sePage.dispatchComponentDidMount();
});
