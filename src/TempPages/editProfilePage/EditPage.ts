import Block from '../../../utils/templateEngine/block';
import { editPage } from './editProfilePageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { TTemplatorContext } from '../../../utils/types/types';

export class EditPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = editPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
