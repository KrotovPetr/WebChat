import { SEPage } from './SEPage';
import { serverErrorContext } from './serverErrorPageContext';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const sePage = new SEPage(serverErrorContext); //<---отсюда выходит строка
    root.append(sePage.getContent()!);
    sePage.dispatchComponentDidMount();
});
