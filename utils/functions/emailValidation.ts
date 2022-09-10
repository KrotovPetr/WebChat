export function emailValidation(str: string): {
    success: boolean;
    message: string;
} {
    let valid: RegExpMatchArray | null = str.match(
        /^[\w]+[\w-]*@[\w-]+\.[a-z]{2,4}$/i,
    );
    console.log(!!valid);
    if (!!valid) {
        return { success: true, message: 'Ok' };
    } else {
        return { success: false, message: 'Некорректный email' };
    }
}
