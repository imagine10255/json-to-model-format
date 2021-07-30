/**
 * 快速顯示 debug 資訊
 * @param title 標題
 * @param data 資料
 */
declare function dd(title: string|number, ...data?: any): void;

declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    declare var window: Window & typeof globalThis & {
        siteCode: string;
    }
}
