import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { chatBlockTemplate } from './chat-block.tmpl';
import { SendButton } from '../../Components/SendButton/SendButton';
import { MessageInput } from '../../Components/MessageInput/MessageInput';

type TChatBlock = {
    properties: { class: string };
    message: string;
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
                    if (this.props.message) {
                        console.log(this.props.message);
                    }
                },
            },
        });
        this.children.input = new MessageInput({
            properties: {
                class: 'messageInput',
                type: 'text',
            },

            events: {
                blur: (e: Event) => {
                    let input: HTMLInputElement = e.target as HTMLInputElement;
                    this.props.message = input.value;
                },
            },
        });
    }

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            chatBlockTemplate(),
        );
    }
}
