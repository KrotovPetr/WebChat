import { ChatPage } from './ChatPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const chatPage = new ChatPage('1'); //<---отсюда выходит строка
    root.append(chatPage.getContent()!);
    chatPage.dispatchComponentDidMount();
});
