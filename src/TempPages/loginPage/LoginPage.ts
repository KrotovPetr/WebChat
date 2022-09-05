import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { TTemplatorContext } from '../../../utils/types/types';
import { loginPage } from './loginPageModule.tmpl';
import { LoginForm } from '../../Blocks/LoginForm/LoginForm';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';

export class LoginPage extends Block {
    constructor(props: TTemplatorContext) {
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
                        for (let i of inputs) {
                            console.log(i.value);
                            switch (i.getAttribute('id')) {
                                case 'password':
                                    valResult = passwordValidation(i.value);
                                    break;
                                case 'login':
                                    valResult = loginValidation(i.value);
                                    break;
                            }
                            if (valResult !== null) {
                                flag = valResult.success;
                            }
                            if (valResult) {
                                if (!valResult.success) {
                                    i.style.border = '2px solid red';
                                    let p =
                                        i.previousElementSibling as HTMLElement;

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
        let tmpl = loginPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
