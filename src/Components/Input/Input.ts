import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { inputComponentTemplate } from './input.tmpl';

type TInput = {
    properties: { id: any; type: any; class: string };
    events: {
        blur: (e: MouseEvent) => void;
        focus: (e: MouseEvent) => void;
        click: (e: MouseEvent) => void;
    };
};
/**
 * Класс, собирающий блок с полем ввода
 * Расширяет класс Block
 */
export class Input extends Block {
    constructor(props: TInput) {
        super('input', props);
    }

    init() {}

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            inputComponentTemplate(),
        );
    }
}
