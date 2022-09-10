export function loginValidation(str: string): {
    success: boolean;
    message: string;
} {
    if (str.length > 20) {
        return {
            success: false,
            message: 'Логин слишком длинный',
        };
    }
    if (str.length < 3) {
        return {
            success: false,
            message: 'Логин слишком короткий',
        };
    }
    let valid: RegExpMatchArray | null = str.match(
        /^[a-zA-Z]+[0-9]*[a-zA-Z]*$/,
    );
    if (!!valid) {
        return {
            success: !!valid,
            message: 'Ok',
        };
    } else {
        return {
            success: !!valid,
            message: 'Должен включать латиницу',
        };
    }
}
