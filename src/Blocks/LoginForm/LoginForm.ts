import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { ValidateInput } from '../ValidateInput/ValidateInput';
import { loginFormBlockTemplate } from './login-form.tmpl';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { validationInputFocus } from '../../../utils/functions/validationInputFocus';
import { validationTemplate } from '../../../utils/functions/validationTemplate';

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
        this.children.inputContainerLogin = new ValidateInput({
            inputProp: {
                type: 'text',
                name: 'login',
                data: 'Логин',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, loginValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Логин");
                }
            }
        });

        this.children.inputContainerPassword = new ValidateInput({
            inputProp: {
                type: 'password',
                name: 'password',
                data: 'Пароль',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, passwordValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Пароль");
                }
            }
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
        return this.compile(templatorConnector, this.props, loginFormBlockTemplate());
    }
}
