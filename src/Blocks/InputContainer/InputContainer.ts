import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { Input } from '../../Components/Input/Input';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { inputContainer } from './input-container.tmpl';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { nameValidation } from '../../../utils/functions/nameValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { phoneValidation } from '../../../utils/functions/phoneValidation';

export class InputContainer extends Block {
    constructor(props: TTemplatorContext) {
        super('div', props);

    }

    init() {
        this.children.input = new Input({
            properties:{
                class:"input",
                type:this.props.inputProp.type,
                id: this.props.inputProp.name
            },
            events:{
                blur: (e: MouseEvent)=>{
                    e.preventDefault();
                    let valResult:boolean = false;
                    let element:HTMLInputElement = <HTMLInputElement>e.target;
                    console.log( element.id)
                    switch(this.props.inputProp.name){
                        case "last_name" : valResult = nameValidation(element.value); break;
                        case "first_name": valResult = nameValidation(element.value); break;
                        case "password": valResult = passwordValidation(element.value); break;
                        case "login": valResult = loginValidation(element.value); break;
                        case "phone": valResult = phoneValidation(element.value); break;
                    }
                    let inp: HTMLElement | null = document.getElementById(element.id);
                    if(!valResult && inp){
                        inp.style.border = "5px";
                    }

                    // if(!valResult){
                    //     e.target.style
                    // }
                    // passwordValidation(e.target.value)
                }
            },
        });
    }

    render() {

        let tmpl = inputContainer();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}