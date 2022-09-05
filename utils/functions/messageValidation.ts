export function messageValidation(str: string): {
    success: boolean;
    message: string;
} {
    if (!str.length) {
        return {
            success: false,
            message: 'Сообщение не должно быть пустым',
        };
    }

    return {
        success: true,
        message: 'Ok',
    };
}
