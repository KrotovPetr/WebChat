export function emailValidation(str: string): {
    success: boolean;
    message: string;
} {
    let valid: RegExpMatchArray | null = str.match(
        /^[\w]+[\w-]*@[\w-]+\.[a-z]{2,4}$/i,
    );
    if (!!valid) {
        return { success: !!valid, message: 'Ok' };
    } else {
        return { success: !!valid, message: 'Некорректный email' };
    }
}
