import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { errorPage } from './errorPageModule.tmpl';

export class NFPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = errorPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
