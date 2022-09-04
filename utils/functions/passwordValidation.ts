export function passwordValidation(str: string):boolean{
    // console.log(1)
    if(str.length>40 || str.length<8){
        return false;
    }
    let valid: RegExpMatchArray | null = str.match(/^[A-Za-z_]+$/);
    return !!valid;
}