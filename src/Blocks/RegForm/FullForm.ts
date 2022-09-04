import Block from '../../../utils/templateEngine/block';
import { TTemplatorContext } from '../../../utils/types/types';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { Button } from '../../Components/Button/Button';
import { regFormBlock } from './full-form.tmpl';
import { InputContainer } from '../InputContainer/InputContainer';
import { passwordValidation } from '../../../utils/functions/passwordValidation';
import { phoneValidation } from '../../../utils/functions/phoneValidation';
import { emailValidation } from '../../../utils/functions/emailValidation';
import { loginValidation } from '../../../utils/functions/loginValidation';
import { nameValidation } from '../../../utils/functions/nameValidation';



export class FullForm extends Block {
    constructor(props: TTemplatorContext) {
        super('form', props);
        // console.log(1);
    }

    init() {
        this.children.inputContainer1 = new InputContainer({
            events:{
                click: (e: Event)=>{
                    e.preventDefault();
                    if(nameValidation(e.target.value)){

                }}
                },
            inputProp:{
               type: "text",
               data: "Имя",
                name:"name",
               inputDescription:"inputDescription",
           },
           properties:{
               class:"inputContainer",
           }

        });
        this.children.inputContainer2 = new InputContainer({

            inputProp:{
                type: "text",
                name:"name",
                data: "Фамилия",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }

        });
        this.children.inputContainer3 = new InputContainer({

            inputProp:{
                data: "Логин",
                name:"login",
                type: "text",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }


        });
        this.children.inputContainer4 = new InputContainer({

            inputProp:{
                type: "text",
                name: "email",
                data: "Эл. почта",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }


        });
        this.children.inputContainer5 = new InputContainer({

            inputProp:{
                type: "text",
                name:"password",
                data: "Пароль",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }


        });
        this.children.inputContainer6 = new InputContainer({

            inputProp:{
                type: "text",
                name:"phone",
                data: "Телефон",
                inputDescription:"inputDescription",
            },
            properties:{
                class:"inputContainer",
            }


        });


        this.children.button = new Button ({
            label: this.props.label,

            properties:{

                type:"submit",
                class: "formButton"
            },
        })
    }

    render() {
        let tmpl = regFormBlock();
        return this.compile(templatorConnector, this.props, tmpl);
    }
}
