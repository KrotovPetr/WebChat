import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { regPage } from './registrationPageModule.tmpl';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { FullForm} from '../../Blocks/RegForm/FullForm';

export class RegistrationPage extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);
    }

    init() {
        this.children.regForm = new FullForm({
            label:"Регистрация",
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
        })
    }

    render() {
        let tmpl = regPage();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
