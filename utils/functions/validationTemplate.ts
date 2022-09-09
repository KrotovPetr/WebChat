export function validationTemplate(
    input: HTMLInputElement,
    callback: (str: string) => { success: boolean; message: string },
) {
    let valResult: {
        success: boolean;
        message: string;
    } | null;
    valResult = callback(input.value);
    if (!valResult.success) {
        input.setAttribute('success', 'false');
        let p: Element | null = input.previousElementSibling;
        if (p !== null) {
            p.textContent = valResult.message;
            p.setAttribute('error', 'true');
        }
    }
}
