import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { regFormBlock } from './full-form.tmpl';
import { InputContainer } from '../InputContainer/InputContainer';

type TFullForm = {
    label: string;
    events: { submit: (e: Event) => void };
    properties: { class: string };
};
/**
 * Класс, собирающий блок с большой формы ввода
 * Расширяет класс Block
 * @children - input_container(1-6) - Поля ввода информации с валидацией
 * @children - button - кнопка отправки формы и проверки на корректность данных
 */
export class FullForm extends Block {
    constructor(props: TFullForm) {
        super('form', props);
    }

    init() {
        this.children.inputContainer1 = new InputContainer({
            inputProp: {
                type: 'text',
                data: 'Имя',
                name: 'first_name',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });
        this.children.inputContainer2 = new InputContainer({
            inputProp: {
                type: 'text',
                name: 'last_name',
                data: 'Фамилия',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });
        this.children.inputContainer3 = new InputContainer({
            inputProp: {
                data: 'Логин',
                name: 'login',
                type: 'text',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });
        this.children.inputContainer4 = new InputContainer({
            inputProp: {
                type: 'text',
                name: 'email',
                data: 'Эл. почта',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });
        this.children.inputContainer5 = new InputContainer({
            inputProp: {
                type: 'text',
                name: 'password',
                data: 'Пароль',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });
        this.children.inputContainer6 = new InputContainer({
            inputProp: {
                type: 'text',
                name: 'phone',
                data: 'Телефон',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });

        this.children.button = new Button({
            label: this.props.label,
            properties: {
                type: 'submit',
                class: 'formButton',
            },
        });
    }

    render() {
        let tmpl = regFormBlock();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
