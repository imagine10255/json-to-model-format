import uniqueId from 'lodash/uniqueId';
import {routePrefixPath} from 'config/app';
import {checkIsIOS} from 'utils/browser';

/**
 * 開啟視窗功能
 * mobile
 *  > ios safari      : 當有非同步發生時, 不可以接著 window.open, 會被 safari 認定不安全而錯誤
 *                      所以需要新開一個 about:black 視窗 (命名ID), 在導頁到目標ID。
 *  > android: chrome : 因配合 ios safari 的情況, 所以直接使用 ios safari 方案避免相同性問題。
 *
 * PS: 開啟的子視窗, 需注意跨域問題, 若開啟的網域與父視窗不同, 則無法再控制(包含覆蓋原本的視窗)
 *
 * @param prefixName     命名前輟ID名稱
 * @param isMultipleOpen 是否需要可以多開子視窗
 * @returns {boolean}
 */
export default class OpenWindow {
    openTargetId: string;
    isMultipleOpen: boolean;
    targetWindow: any;
    prefixName: string;


    constructor(prefixName: string, isMultipleOpen: boolean) {
        this.prefixName = prefixName;
        this.openTargetId = this.createOpenTargetId();
        this.isMultipleOpen = isMultipleOpen;
        this.targetWindow = null;
    }

    createOpenTargetId(){
        return uniqueId(`${this.prefixName}_`);
    }

    /**
     * 準備開啟視窗的前置作業
     */
    ready(){
        const readyUrl = `${routePrefixPath}/static/plugins/loading-window/index.html`;
        const closeNoticeUrl = `${routePrefixPath}/static/plugins/loading-window/close.html`;

        if(checkIsIOS() && this.targetWindow){
            // iOS Safari 先切換到 關閉提示頁面, 在開啟新的準備視窗
            this.targetWindow.location.href = closeNoticeUrl;
            this.openTargetId = this.createOpenTargetId();

        }else if(this.isMultipleOpen){
            // 多開模式需要使用不同ID
            this.openTargetId = this.createOpenTargetId();

        }

        // 開啟準備視窗
        this.targetWindow = window.open(readyUrl, this.openTargetId);
    }

    /**
     * 開啟視窗
     * @param url 開啟目標的Url
     */
    open(url: string){
        // 單一顯示模式中, 如果子視窗未關閉, 則使用子視窗導頁
        if(!this.isMultipleOpen && this.targetWindow){
            this.targetWindow.location.href = url;
        }else{
            window.open(url, this.openTargetId);
        }
    }

    /**
     * 關閉視窗
     */
    close() {
        try{
            this.targetWindow.close();

        }catch (e) {
            console.log('open-window: window close error');
        }
    }

}
