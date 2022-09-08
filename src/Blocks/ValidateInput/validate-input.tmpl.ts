/**
 * Возвращает html разметку блока c полем ввода
 * @return string
 */

export function validateInputTemplate() {
    return `
        <p class={{"inputProp.inputDescription"}}>{{"inputProp.data"}}</p>
        {{input}}
    `;
}
