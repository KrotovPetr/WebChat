import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { loginPage } from '../loginPage/loginPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { profilePage } from './profilePageModule.tmpl';

export class ProfilePage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = profilePage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
