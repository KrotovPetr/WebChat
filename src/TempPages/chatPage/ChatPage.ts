import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { chatPage } from './chatPageModule.tmpl';
import { TTemplatorContext } from '../../../utils/types/types';

export class ChatPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {}

    render() {
        let tmpl = chatPage();
        // console.log(this.props)
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
