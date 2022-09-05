import Block from '../../../utils/templateEngine/block';
import { editPage } from './editProfilePageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { TTemplatorContext } from '../../../utils/types/types';
import { FullForm } from '../../Blocks/FullForm/FullForm';

export class EditPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {
        this.children.editForm = new FullForm({
            label: 'Изменить',
            events: {
                submit: (e: Event) => {
                    e.preventDefault();
                    let form = document.getElementsByClassName('regForm')[0];
                    let inputs = form.getElementsByTagName('input');
                    for (let i of inputs) {
                        console.log(i.value);
                    }
                },
            },
            properties: {
                class: 'form',
            },
        });
    }

    render() {
        let tmpl = editPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
