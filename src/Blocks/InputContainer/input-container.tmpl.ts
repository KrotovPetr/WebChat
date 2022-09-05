/**
 * Возвращает html разметку блока c полем ввода
 * @return string
 *
 */

export function inputContainer() {
    return `
        <p class={{"inputProp.inputDescription"}}>{{"inputProp.data"}}</p>
        {{input}}
    `;
}
