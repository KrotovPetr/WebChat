import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { InputContainer } from '../InputContainer/InputContainer';
import { loginFormBlock } from './login-form.tmpl';

type TLoginForm = {
    events: { submit: (e: Event) => void };
    properties: { class: string };
};
/**
 * Класс, собирающий блок с малой формой ввода
 * Расширяет класс Block
 * @children - input_container(1-2) - Поля ввода информации с валидацией
 * @children - button - кнопка отправки формы и проверки на корректность данных
 */
export class LoginForm extends Block {
    constructor(props: TLoginForm) {
        super('form', props);
    }

    init() {
        this.children.inputContainer1 = new InputContainer({
            inputProp: {
                type: 'text',
                name: 'login',
                data: 'Логин',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });

        this.children.inputContainer2 = new InputContainer({
            inputProp: {
                type: 'password',
                name: 'password',
                data: 'Пароль',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
        });

        this.children.button = new Button({
            label: 'Войти',
            events: {
                submit: (e: Event) => {
                    e.preventDefault();
                },
            },
            properties: {
                type: 'submit',
                class: 'formButton',
            },
        });
    }

    render() {
        let tmpl = loginFormBlock();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
