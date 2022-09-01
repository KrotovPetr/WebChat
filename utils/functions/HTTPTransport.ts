import { queryStringify } from './queryStringify';

type TMethods = {
    GET: string,
    PUT: string,
    DELETE: string,
    POST: string,
}

type TOptions = {
    headers?: any,
    method?: string,
    data?: any,
    timeout: number
}

const METHODS:TMethods = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    POST: 'POST',
};



class HTTPTransport {
    get = (url: string, options: {} | TOptions = {}) => {
        let dataOp = queryStringify(options.data);
        return this.request(url+dataOp, {...options,  method: METHODS.GET}, options.timeout);
    };

    put=(url: string, options={})=>{
        let dataOp = queryStringify(options.data);
        return this.request(url, {...options ,  data: dataOp, method: METHODS.GET}, options.timeout);
    }
    post=(url: string,options={})=>{
        let dataOp = queryStringify(options.data);
        return this.request(url, {...options,  data: dataOp, method: METHODS.GET}, options.timeout);

    }
    delete=(url: string,options={})=>{
        let dataOp = queryStringify(options.data);
        return this.request(url, {...options,  data: dataOp, method: METHODS.GET}, options.timeout);
    }

    request = (url: string, options, timeout = 5000) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(options.method, url);
            if(options.headers){
                for(let key in options.headers){
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (options.method === METHODS.GET || !options.data) {
                xhr.send();
            } else {
                xhr.send(options.data);
            }

        });

    };
}
