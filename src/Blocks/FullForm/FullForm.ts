import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { regFormBlockTemplate } from './full-form.tmpl';
import { ValidateInput } from '../ValidateInput/ValidateInput';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { nameValidation } from '../../../utils/functions/nameValidation';
import { emailValidation } from '../../../utils/functions/emailValidation';
import { phoneValidation } from '../../../utils/functions/phoneValidation';
import { validationTemplate } from '../../../utils/functions/validationTemplate';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { validationInputFocus } from '../../../utils/functions/validationInputFocus';

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
        this.children.inputContainerFirstName = new ValidateInput({
            inputProp: {
                type: 'text',
                data: 'Имя',
                name: 'first_name',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, nameValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Имя");
                }
            }
        });
        this.children.inputContainerLastName = new ValidateInput({
            inputProp: {
                type: 'text',
                name: 'last_name',
                data: 'Фамилия',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, nameValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Фамилия");
                }
            }
        });
        this.children.inputContainerLogin = new ValidateInput({
            inputProp: {
                data: 'Логин',
                name: 'login',
                type: 'text',
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
        this.children.inputContainerEmail = new ValidateInput({
            inputProp: {
                type: 'text',
                name: 'email',
                data: 'Эл. почта',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, emailValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Эл. почта");
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
                focus:(e:Event, )=>{
                    validationInputFocus(e.target as HTMLInputElement, "Пароль");
                }
            }
        });
        this.children.inputContainerPhone = new ValidateInput({
            inputProp: {
                type: 'text',
                name: 'phone',
                data: 'Телефон',
                inputDescription: 'inputDescription',
            },
            properties: {
                class: 'inputContainer',
            },
            events:{
                blur:(e:Event)=>{
                    validationTemplate(e.target as HTMLInputElement, phoneValidation);

                },
                focus:(e:Event)=>{
                    validationInputFocus(e.target as HTMLInputElement, "Телефон");
                }
            }
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
        return this.compile(templatorConnector, this.props, regFormBlockTemplate());
    }
}
