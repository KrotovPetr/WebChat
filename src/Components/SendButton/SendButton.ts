import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { sendButtonComponentTemplate } from './send-button.tmpl';

type TSendButton = {
    icon: string;
    properties: { class: string };
    events: { click: () => void };
};

/**
 * Класс, собирающий кнопку отправки сообщения
 * Расширяет класс Block
 */
export class SendButton extends Block {
    constructor(props: TSendButton) {
        super('button', props);
    }

    init() {}

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            sendButtonComponentTemplate(),
        );
    }
}
