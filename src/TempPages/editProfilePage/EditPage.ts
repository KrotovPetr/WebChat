import Block from '../../../utils/templateEngine/block';
import { editPageTemplate } from './editProfilePageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { FullForm } from '../../Blocks/FullForm/FullForm';

export class EditPage extends Block {
    constructor(props: {}) {
        super('div', props);
    }

    init() {
        this.children.editForm = new FullForm({
            label: 'Изменить',
            events: {
                submit: (e: Event) => {
                    e.preventDefault();
                    let form = document.getElementsByClassName('regForm')[0];
                    let inputs: HTMLCollectionOf<HTMLInputElement> = form.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;
                    for (let input of inputs) {
                        console.log(input.value);
                    }
                },
            },
            properties: {
                class: 'form',
            },
        });
    }

    render() {
        return this.compile(templatorConnector, this.props, editPageTemplate());
    }
}
