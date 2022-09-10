export function ifOperFunctions(
    command: string,
    template: string,
    ctx: any,
): string {
    let regExp: RegExp = new RegExp(`{{#${command}}}(.)+{{/${command}}}`);
    let str: RegExpMatchArray | null = template.match(regExp);
    let splitArr = template.split(regExp);
    if (str !== null) {
        if (ctx.command) {
            let regExpTrue = new RegExp(
                `{{#${command}}}(.)+{{#else\\s${command.split(' ')[1]}}}`,
            );
            let newStr: string = str[0].match(regExpTrue)![0]
                .replace(`{{#${command}}}`, '')
                .replace(`{{#else ${command.split(' ')[1]}}}`, '');
            return (
                splitArr[0] +
                newStr +
                splitArr.slice(1, splitArr.length).join('')
            );
        } else {
            let regExpFalse = new RegExp(
                `{{#else\\s${command.split(' ')[1]}}}(.)+{{/${command}}}`,
            );
            let newStr: string = str[0].match(regExpFalse)![0].replace(`{{#${command}}}`, '')
                .replace(`{{#else ${command.split(' ')[1]}}}`, '');
            return (
                splitArr[0] +
                newStr +
                splitArr.slice(1, splitArr.length).join('')
            );
        }
    }
    return '';
}
