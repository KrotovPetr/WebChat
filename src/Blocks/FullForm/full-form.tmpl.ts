/**
 * Большая форма с полями, включает поля для имени, фамилии, логина, пароля, телефона, эл.почты
 * @return string
 */

export function regFormBlock() {
    return `
        {{inputContainer1}}
        {{inputContainer2}}
        {{inputContainer3}}
        {{inputContainer4}}
        {{inputContainer5}}
        {{inputContainer6}}
        {{button}}
    `;
}
