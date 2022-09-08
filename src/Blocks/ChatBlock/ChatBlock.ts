import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { chatBlockTemplate } from './chat-block.tmpl';
import { SendButton } from '../../Components/SendButton/SendButton';

type TChatBlock = {
    properties: { class: string };
};

/**
 * Класс, собирающий блок чата с собеседником
 * Расширяет класс Block
 * @children - send_button - кнопка отправки сообщения
 */

export class ChatBlock extends Block {
    constructor(props: TChatBlock) {
        super('div', props);
    }

    init() {
        this.children.send_button = new SendButton({
            icon: 'arrow_forward',
            properties: {
                class: 'inputMessageButton',
            },
            events: {
                click: () => {
                    let input = document.getElementsByClassName(
                        'messageInput',
                    )[0] as HTMLInputElement;
                    if (input.value.length === 0) {
                        console.log(input.value);
                    }
                },
            },
        });
    }

    render() {
        return this.compile(templatorConnector, this.props, chatBlockTemplate());
    }
}
