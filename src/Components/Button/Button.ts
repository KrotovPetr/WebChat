import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { buttonComponent } from './button.tmpl';

export class Button extends Block {
    constructor(props: TTemplatorContext) {
        super('button', props);
    }

    init() {}

    render() {
        let tmpl = buttonComponent();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
