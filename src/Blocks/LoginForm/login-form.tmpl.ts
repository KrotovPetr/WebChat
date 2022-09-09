/**
 * Возвращает html разметку блока c формой авторизации
 * @return string
 *
 */

export function loginFormBlockTemplate():string {
    return `
        {{inputContainerLogin}}
        {{inputContainerPassword}}
        {{button}}
    `;
}
