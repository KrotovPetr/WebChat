import { ChatPage } from './ChatPage';

window.addEventListener('DOMContentLoaded', () => {
    const root:Element = document.querySelector('#app')!;
    const chatPage:ChatPage = new ChatPage({}); //<---отсюда выходит строка
    root.append(chatPage.getContent()!);
    chatPage.dispatchComponentDidMount();
});
