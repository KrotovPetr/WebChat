import { queryStringify } from './queryStringify';

type TMethods = {
    GET: string;
    PUT: string;
    DELETE: string;
    POST: string;
};

type TOptions = {
    headers?: any;
    data?: any;
    timeout?: number | string;
    method?: string;
};

const METHODS: TMethods = {
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    POST: 'POST',
};

// @ts-ignore
class HTTPTransport {
    get = (url: string, options: Record<string, any> | TOptions = {}) => {
        let dataOp = queryStringify(options.data);
        return this.request(url + dataOp, { ...options, method: METHODS.GET });
    };

    put = (url: string, options: Record<string, any> = {}) => {
        let dataOp = queryStringify(options.data);
        return this.request(url, {
            ...options,
            data: dataOp,
            method: METHODS.GET,
        });
    };
    post = (url: string, options: Record<string, any> = {}) => {
        let dataOp = queryStringify(options.data);
        return this.request(url, {
            ...options,
            data: dataOp,
            method: METHODS.GET,
        });
    };
    delete = (url: string, options: Record<string, any> = {}) => {
        let dataOp = queryStringify(options.data);
        return this.request(url, {
            ...options,
            data: dataOp,
            method: METHODS.GET,
        });
    };

    request = (url: string, options: TOptions) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(<string>options.method, url);
            if (options.headers) {
                for (let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }

            xhr.onload = function () {
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
