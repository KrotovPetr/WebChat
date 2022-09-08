import Block from '../../../utils/templateEngine/block';
import { Input } from '../../Components/Input/Input';
import { templatorConnector } from '../../../utils/templateEngine/templatorConnector';
import { validateInputTemplate } from './validate-input.tmpl';


/**
 * Класс, собирающий блок с полем ввода
 * Расширяет класс Block
 * @children - input - Поля ввода информации с валидацией
 *
 */
export class ValidateInput extends Block {
    constructor(props: any) {
        super('div', props);
    }

    init() {
        this.children.input = new Input({
            properties: {
                class: 'input',
                type: this.props.inputProp.type,
                id: this.props.inputProp.name,
            },
            events: {
                blur: this.props.events.blur,
                focus: this.props.events.focus,
                click:this.props.events.click
                // blur: (e: MouseEvent) => {
                //     e.preventDefault();
                //
                //     let valResult: {
                //         success: boolean;
                //         message: string;
                //     } | null = null;
                //     let element: HTMLInputElement = <HTMLInputElement>e.target;
                //     switch (this.props.inputProp.name) {
                //         case 'last_name':
                //             valResult = nameValidation(element.value);
                //             break;
                //         case 'first_name':
                //             valResult = nameValidation(element.value);
                //             break;
                //         case 'password':
                //             valResult = passwordValidation(element.value);
                //             break;
                //         case 'login':
                //             valResult = loginValidation(element.value);
                //             break;
                //         case 'phone':
                //             valResult = phoneValidation(element.value);
                //             break;
                //         case 'email':
                //             valResult = emailValidation(element.value);
                //             break;
                //     }
                //     let input: HTMLElement | null = document.getElementById(
                //         element.id,
                //     );
                //     if (valResult) {
                //         if (!valResult.success && input) {
                //             input.setAttribute("success", "false")
                //             let p: HTMLElement | undefined =
                //                 this.element?.getElementsByClassName(
                //                     'inputDescription',
                //                 )[0] as HTMLElement;
                //             if (typeof p !== 'undefined') {
                //                 p.innerHTML = valResult.message;
                //                 p.style.color = 'red';
                //             }
                //         }
                //     }
                // },
                // focus: (e: MouseEvent) => {
                //     e.preventDefault();
                //     let element: HTMLInputElement = <HTMLInputElement>e.target;
                //     let input: HTMLElement | null = document.getElementById(
                //         element.id,
                //     );
                //     if (input) {
                //         input.setAttribute("success", "false")
                //         let p: HTMLElement | undefined =
                //             this.element?.getElementsByClassName(
                //                 'inputDescription',
                //             )[0] as HTMLElement;
                //         if (typeof p !== 'undefined') {
                //             p.innerHTML = this.props.inputProp.data;
                //             p.style.color = 'black';
                //         }
                //     }
                // },
                // click: (e: MouseEvent) => {
                //     e.preventDefault();
                //     let element: HTMLInputElement = <HTMLInputElement>e.target;
                //     let input: HTMLElement | null = document.getElementById(
                //         element.id,
                //     );
                //     if (input) {
                //         input.setAttribute("success", "true")
                //     }
                // },
            },
        });
    }

    render() {
        return this.compile(templatorConnector, this.props, validateInputTemplate());
    }
}
