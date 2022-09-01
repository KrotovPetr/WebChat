import { errorContext } from './errorPageContext';
import { NFPage } from './NFPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const nfPage = new NFPage(errorContext); //<---отсюда выходит строка
    root.append(nfPage.getContent()!);
    nfPage.dispatchComponentDidMount();
});
