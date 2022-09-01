import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { regPage } from './registrationPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';

export class RegistrationPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = regPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
