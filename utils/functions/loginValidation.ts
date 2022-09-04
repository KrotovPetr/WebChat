export function loginValidation(str: string):boolean{
    if(str.length > 20 || str.length <3){
        return false;
    }
    let valid: RegExpMatchArray | null = str.match(/^[a-zA-Z]+[0-9]*[a-zA-Z]*$/);
    return !!valid;
}