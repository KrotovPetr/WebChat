import { ifOperFunctions } from './ifOperFunctions';
import { repeatString } from './repeatString';

export function changeSpecFunctions(str: string, ctx: any): string {
    str = str.replace(/\n/gim, '');
    let ifArr = str.match(/(#if)\s(\w)+/gi);
    if (ifArr !== null) {
        for (let oper of ifArr) {
            str = ifOperFunctions(oper.split('#')[1], str, ctx);
        }
    }
    let eachArr = str.match(/({{(.)each\s(\w)+}})/gi);
    let stackArr = [];
    if (eachArr !== null) {
        for (let oper of eachArr) {
            if (oper.includes('#')) {
                stackArr.unshift(oper);
            }
            if (oper.includes('/')) {
                if (oper.split(' ')[1] === stackArr[0].split(' ')[1]) {
                    str = repeatString(str, ctx, oper.split(' ')[1]);
                    stackArr.shift();
                }
            }
        }
    }

    return str;
}
