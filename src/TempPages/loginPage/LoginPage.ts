import Block from '../../../utils/templateEngine/block';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { TTemplatorContext } from '../../../utils/types/types';
import { loginPage } from './loginPageModule.tmpl';
import { LoginForm } from '../../Blocks/LoginForm/LoginForm';

export class LoginPage extends Block {
    constructor(props: TTemplatorContext) {
        super('form', props);
    }

    init() {
        this.children.loginForm = new LoginForm(
            {
                events: {
                    submit: (e:Event) => {
                        e.preventDefault()
                        let form = document.getElementsByClassName("regForm")[0];
                        let inputs = form.getElementsByTagName("input");
                        for(let i of inputs){
                            console.log(i.value)
                        }

                    },
                },
                properties:{
                    class: "form",
                }
            }
        );
    }

    render() {
        let tmpl = loginPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
