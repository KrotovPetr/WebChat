import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { loginPageTemplate } from './loginPageModule.tmpl';
import { LoginForm } from '../../Blocks/LoginForm/LoginForm';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';

export class LoginPage extends Block {
    constructor(props: any) {
        super('form', props);
    }

    init() {
        this.children.loginForm = new LoginForm({
            events: {
                submit: (e: Event) => {
                    e.preventDefault();

                    let form = this.element?.getElementsByClassName('form')[0];
                    if (typeof form !== 'undefined') {
                        let inputs: HTMLCollectionOf<HTMLInputElement> =
                            form.getElementsByClassName(
                                'input',
                            ) as HTMLCollectionOf<HTMLInputElement>;
                        let valResult: {
                            success: boolean;
                            message: string;
                        } | null = null;
                        let flag: boolean = true;
                        for (let input of inputs) {
                            console.log(input.value);
                            switch (input.getAttribute('id')) {
                                case 'password':
                                    valResult = passwordValidation(input.value);
                                    break;
                                case 'login':
                                    valResult = loginValidation(input.value);
                                    break;
                            }
                            if (valResult !== null) {
                                flag = valResult.success;
                            }
                            if (valResult) {
                                if (!valResult.success) {
                                    input.style.border = '2px solid red';
                                    let p =
                                        input.previousElementSibling as HTMLElement;

                                    if (typeof p !== 'undefined') {
                                        p.innerHTML = valResult.message;
                                        p.style.color = 'red';
                                    }
                                }
                            }
                        }
                        if (flag) {
                            window.location.href =
                                '../../chatPage/chatPage.html';
                        }
                    }
                },
            },
            properties: {
                class: 'form',
            },
        });
    }

    render() {
        return this.compile(templatorConnector, this.props, loginPageTemplate());
    }
}
