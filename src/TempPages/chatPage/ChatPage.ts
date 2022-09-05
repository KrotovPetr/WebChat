import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { chatPage } from './chatPageModule.tmpl';
import { TTemplatorContext } from '../../../utils/types/types';
import { ChatBlock } from '../../Blocks/ChatBlock/ChatBlock';

export class ChatPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {
        this.children.chatBlock = new ChatBlock({
            properties: {
                class: 'chatExContainer',
            },
        });
    }

    render() {
        let tmpl = chatPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
