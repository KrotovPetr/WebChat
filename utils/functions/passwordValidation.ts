export function passwordValidation(str: string): {
    success: boolean;
    message: string;
} {
    if (str.length > 40) {
        return {
            success: false,
            message: 'Пароль слишком длинный',
        };
    }
    if (str.length < 8) {
        return {
            success: false,
            message: 'Пароль слишком короткий',
        };
    }

    let valid: RegExpMatchArray | null = str.match(/^(?=.*[A-Z])[A-Za-z_]+$/);
    if (!!valid) {
        return {
            success: true,
            message: 'ok',
        };
    } else {
        return {
            success: false,
            message: 'Должен содержать заглавную букву',
        };
    }
}
