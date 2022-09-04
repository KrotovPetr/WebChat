import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { InputContainer } from '../InputContainer/InputContainer';
import { loginFormBlock } from './login-form.tmpl';



export class LoginForm extends Block {
    constructor(props: TTemplatorContext) {
        super('form', props);
    }

    init() {
        this.children.inputContainer1 = new InputContainer({
            inputProp:{
                type: "text",
                data: "Логин",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }

        });

        this.children.inputContainer2 = new InputContainer({
            inputProp:{
                type: "password",
                data: "Пароль",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }


        });


        this.children.button = new Button ({
            label: "Войти",
            events: {
                submit: (e:Event) => {
                    e.preventDefault();
                },
            },
            properties:{
                type:"submit",
                class: "formButton"
            },
        })
    }

    render() {
        let tmpl = loginFormBlock()
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
