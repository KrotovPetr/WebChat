import { chatContext } from './chatPageContext';
import { ChatPage } from './ChatPage';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;
    const chatPage = new ChatPage(chatContext); //<---отсюда выходит строка
    root.append(chatPage.getContent()!);
    chatPage.dispatchComponentDidMount();
});
