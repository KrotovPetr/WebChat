import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Input } from '../../Components/Input/Input';
import { formBlock } from './form.tmpl';

export class Form extends Block {
    constructor(props: TTemplatorContext) {
        super('form', props);
    }

    init() {
        this.children.input = new Input({});
    }

    render() {
        let tmpl = formBlock();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
