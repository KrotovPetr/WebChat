import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { messageInputComponentTemplate } from './message-input.tmpl';

type TInput = {
    properties: { id?: string; type: string; class: string };
    events: {
        blur: (e: Event) => void;
    };
};
/**
 * Класс, собирающий блок с полем ввода
 * Расширяет класс Block
 */
export class MessageInput extends Block {
    constructor(props: TInput) {
        super('input', props);
    }

    init() {}

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            messageInputComponentTemplate(),
        );
    }
}
