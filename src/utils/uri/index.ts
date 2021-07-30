import get from 'lodash/get';

/**
 * Obj轉QueryString
 * @param obj key value 物件
 * @returns {string}
 */
export function serialize(obj: {
    [key: string]: object
} = {}) {
    const str: any = [];
    Object.keys(obj).map(key => {
        const value: any = obj[key];
        str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        return true;
    });
    return str.join('&');
}

/**
 * 解析 Search QueryString 轉成 物件
 * @param val QueryString 字串
 * @returns {undefined}
 */
export function parseQueryString<T>(val = ''): T|undefined {
    const pairs = val.replace(/^.*\?/, '').split('&');
    const obj: any = {};

    if (pairs[0] !== '') {
        pairs.map(o => {
            const p = o.split('=');
            // @ts-ignore
            obj[p[0]] = p[1];
            return true;
        });
        return obj;
    }
    return undefined;
}

/**
 * 取得網域
 * 若非正確網址
 * @param url
 */
export function getDomain(url: string): string {

    if (url) {
        // 域名
        url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}/g);
    }
    // @ts-ignore
    return null;
}

/**
 * 取得主網域(二級域名)
 * 若非正確網址, 例如是IP位置就會回傳空白
 * @param hostName
 */
export function getMainDomain(hostName: string): string {

    if (hostName) {
        const lastString = hostName.length - 1;
        if (hostName.substr(lastString, 1) === '/') {
            hostName = hostName.substr(0, lastString);
        }
        // eslint-disable-next-line no-useless-escape
        const regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
        const urlParts = regexParse.exec(hostName);
        if (urlParts) {
            // @ts-ignore
            return get(urlParts, 0, null);
        }
    }
    // @ts-ignore
    return null;
}

/**
 * 取得子網域(最後一段)
 * 若非正確網址, 例如是IP位置就會回傳空白
 * @param hostName
 */
export function getSubDomain(hostName: string): string {
    // eslint-disable-next-line no-useless-escape
    const regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    const urlParts = regexParse.exec(hostName);
    if (urlParts) {
        // eslint-disable-next-line no-useless-escape
        const regexFilter = new RegExp('[a-z\-0-9]{2,63}').exec(hostName.replace(urlParts[0], '').slice(0, -1));
        // @ts-ignore
        return get(regexFilter, 0, null);
    }
    // @ts-ignore
    return null;

}
