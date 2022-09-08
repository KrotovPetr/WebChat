/**
 * Большая форма с полями, включает поля для имени, фамилии, логина, пароля, телефона, эл.почты
 * @return string
 */

export function regFormBlockTemplate() {
    return `
        {{inputContainerFirstName}}
        {{inputContainerLastName}}
        {{inputContainerLogin}}
        {{inputContainerEmail}}
        {{inputContainerPassword}}
        {{inputContainerPhone}}
        {{button}}
    `;
}
