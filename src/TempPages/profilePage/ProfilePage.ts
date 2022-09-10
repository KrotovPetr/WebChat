import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { profilePageTemplate } from './profilePageModule.tmpl';

export class ProfilePage extends Block {
    constructor(props: any) {
        super('div', props);
    }

    init() {}

    render() {
        return this.compile(
            templatorConnector,
            this.props,
            profilePageTemplate(),
        );
    }
}
