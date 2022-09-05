export function phoneValidation(str: string): {
    success: boolean;
    message: string;
} {
    let valid: RegExpMatchArray | null = str.match(/^[\d\+][\d]{10,15}$/);
    if (!!valid) {
        return {
            success: true,
            message: 'ok',
        };
    } else {
        return {
            success: false,
            message: 'Некорректный номер',
        };
    }
}
