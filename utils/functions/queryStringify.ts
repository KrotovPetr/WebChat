export function queryStringify(data: any): string {
    if(typeof data === "undefined"){
        return '';
    }else{
        let str: string = "";

        for(let keys in data){
            str+=`${keys}=${data[keys]}*`;
        }
        str = str.replaceAll("*", "&")
        return `?${str.slice(0, str.length - 1)}`;
    }

}