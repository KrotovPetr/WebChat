import { errorPage } from './serverErrorPageModule.tmpl';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import Block from '../../../utils/templateEngine/block';

export class SEPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = errorPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
