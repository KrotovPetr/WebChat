import { errorPageTemplate } from './serverErrorPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import Block from '../../../utils/templateEngine/block';

export class ServerErrorPage extends Block {
    constructor(props: any) {
        super('div', props);
    }

    init() {}

    render() {
        return this.compile(templatorConnector, this.props, errorPageTemplate());
    }
}
