export function emailValidation(str: string):boolean{
    let valid: RegExpMatchArray | null = str.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i);
    return !!valid;
}