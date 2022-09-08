import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { buttonComponentTemplate } from './button.tmpl';

type TButton = {
    label: string;
    events?: { submit: (e: Event) => void };
    properties: { type: string; class: string };
};
/**
 * Класс, собирающий блок с кнопкой ввода
 * Расширяет класс Block
 */
export class Button extends Block {
    constructor(props: TButton) {
        super('button', props);
    }

    init() {}

    render() {
        return this.compile(templatorConnector, this.props,buttonComponentTemplate());
    }
}
