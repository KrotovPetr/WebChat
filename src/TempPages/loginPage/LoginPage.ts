import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { TTemplatorContext } from '../../../utils/types/types';
import { loginPage } from './loginPageModule.tmpl';

export class LoginPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = loginPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
