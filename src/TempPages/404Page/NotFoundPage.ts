import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { errorPageTemplate } from './errorPageModule.tmpl';

export class NotFoundPage extends Block {
    constructor(props: any) {
        super('div', props);
    }

    init() {}

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            errorPageTemplate(),
        );
    }
}
