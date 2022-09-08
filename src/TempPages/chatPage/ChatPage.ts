import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { chatPageTemplate } from './chatPageModule.tmpl';
import { ChatBlock } from '../../Blocks/ChatBlock/ChatBlock';

export class ChatPage extends Block {
    constructor(props: any) {
        super('div', props);
    }

    init() {
        this.children.chatBlock = new ChatBlock({
            properties: {
                class: 'chatExContainer',
            },
            message:"",
        });
    }

    render() {
        return this.compile(templatorConnector, this.props, chatPageTemplate());
    }
}
