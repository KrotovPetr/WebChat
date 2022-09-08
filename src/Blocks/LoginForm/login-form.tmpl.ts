/**
 * Возвращает html разметку блока c формой авторизации
 * @return string
 *
 */

export function loginFormBlockTemplate() {
    return `
        {{inputContainerLogin}}
        {{inputContainerPassword}}
        {{button}}
    `;
}
