export function phoneValidation(str: string):boolean{
    let valid: RegExpMatchArray | null = str.match(/^[\d|\+][\d]{10,15}$/);
    return !!valid;
}