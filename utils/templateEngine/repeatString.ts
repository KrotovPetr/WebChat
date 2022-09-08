// export function repeatString(str:string, ctx: any):string{
//     let reg: RegExp = /#\w+\s?\w+/i;
//     let name = str.match(reg)[0].split(" ")[1];
//     // let regStr = new RegExp(`{{#each\\s`+name+`}}(.)+{{\/each\\s`+name+`}}`, "im");
//     let regStr = new RegExp(`{{#each\\s\w+}}(.)+{{\/each\\s\w*}}`, "gim");
//     // console.log(regStr)
//     let copyStr = str.split(/{{#each\s\w+}}(.)+{{\/each\s\w*}}/im)
//     console.log(copyStr)
//     return "";
// }