import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { regPage } from './registrationPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { FullForm } from '../../Blocks/FullForm/FullForm';
import { nameValidation } from '../../../utils/functions/nameValidation';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { phoneValidation } from '../../../utils/functions/phoneValidation';
import { emailValidation } from '../../../utils/functions/emailValidation';

export class RegistrationPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {
        this.children.regForm = new FullForm({
            label: 'Регистрация',
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
                                case 'last_name':
                                    valResult = nameValidation(i.value);
                                    break;
                                case 'first_name':
                                    valResult = nameValidation(i.value);
                                    break;
                                case 'password':
                                    valResult = passwordValidation(i.value);
                                    break;
                                case 'login':
                                    valResult = loginValidation(i.value);
                                    break;
                                case 'phone':
                                    valResult = phoneValidation(i.value);
                                    break;
                                case 'email':
                                    valResult = emailValidation(i.value);
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
        let tmpl = regPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
