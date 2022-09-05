export function nameValidation(str: string): {
    success: boolean;
    message: string;
} {
    if (!str) {
        return {
            success: false,
            message: 'Поле пустое',
        };
    } else {
        let valid: RegExpMatchArray | null = str.match(/^[A-Z][A-Za-z]+$/);
        let mes = '';
        if (!!valid) {
            mes = 'Ok';
        } else {
            mes = 'Должно начинаться с заглавной буквы';
        }
        return {
            success: !!valid,
            message: mes,
        };
    }
}
