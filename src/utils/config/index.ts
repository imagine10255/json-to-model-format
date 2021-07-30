import {routePrefixPath} from 'config/app';
import get from 'lodash/get';
import {getSubDomain} from '../uri';
import {isEmpty} from '../equal';
import {version} from '../../../package.json';





/**
 * 取得版本號
 */
export function getAppVersion(): string{
    return version;
}


/**
 * 取得代理帳號方法
 * @returns {*}
 */
export function getAgentAccount(): string{
    let account = '';

    // 特定域名 對應 代理帳號 特例
    const agentAccountList = {};

    if(process.env.REACT_APP_SITE_ENV === 'prod'){
        // 抓取域名對應表
        account = get(agentAccountList, window.location.hostname, getSubDomain(window.location.hostname));

        // 沒有子域名為
        if(isEmpty(account)){
            account = 'www';
        }
    } else {
        // 測試環境皆使用vv4a
        account = 'vv4a';
    }
    return account;
}






/**
 * 取得後台上傳檔案的路徑資源網址
 */
export function uploadUrl(path?: string): string{
    if(path){
        // 去除參數第一個斜線
        return `/FileUpload/${path.replace(/^\//, '')}`;
    }
    return '';
}


/**
 * 取得前端資源網址
 */
export function asset(path?: string): string{
    if(path){
        // 去除參數第一個斜線
        return `${routePrefixPath}/static/${path.replace(/^\//, '')}`;
    }
    return '';
}


