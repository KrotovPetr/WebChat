import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';

export class Input extends Block {
    constructor(props: TTemplatorContext) {
        super('input', props);
    }

    init() {}

    render() {
        let tmpl = '';
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
