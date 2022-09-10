export function repeatString(str: string, ctx: any, name: string): string {
    let regExp:RegExp = new RegExp(
        `\{\{#each\\s${name}(.)+\{\{\\/each\\s${name}`,
        'gim',
    );
    let regExp2:RegExp = new RegExp(`({{(.)each\\s${name})`, 'gim'); //<--ошибка тут
    let copyStr: string = "";
    if(regExp && str!==null){ copyStr = str.match(regExp)![0].replace(regExp2, '');}

    let str2 = '';
    for (let value of ctx[name.replace('}}', '')]) {
        str2 += copyStr.replace(/{{this}}/, value);
    }
    let strArr = str.split(regExp);
    let str3 = strArr[0] + str2 + strArr.slice(1, strArr.length).join('');
    // console.log(str3)
    return str3;
}
