import Block from '../../../utils/templateEngine/block';
import { regPageTemplate } from './registrationPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { FullForm } from '../../Blocks/FullForm/FullForm';
import { nameValidation } from '../../../utils/functions/nameValidation';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { phoneValidation } from '../../../utils/functions/phoneValidation';
import { emailValidation } from '../../../utils/functions/emailValidation';

export class RegistrationPage extends Block {
    constructor(props: any) {
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
                        for (let input of inputs) {
                            console.log(input.value);
                            switch (input.getAttribute('id')) {
                                case 'last_name':
                                    valResult = nameValidation(input.value);
                                    break;
                                case 'first_name':
                                    valResult = nameValidation(input.value);
                                    break;
                                case 'password':
                                    valResult = passwordValidation(input.value);
                                    break;
                                case 'login':
                                    valResult = loginValidation(input.value);
                                    break;
                                case 'phone':
                                    valResult = phoneValidation(input.value);
                                    break;
                                case 'email':
                                    valResult = emailValidation(input.value);
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
        return this.compile(templatorConnector, this.props, regPageTemplate());
    }
}
