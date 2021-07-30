import gridConfig from 'config/grid';

/**
 * 判斷是否為手機裝置
 */
export function checkIsMobile() {
    try { document.createEvent('TouchEvent'); return true; } catch (e) { return false; }
}

/**
 * 判斷是否為IOS
 * @returns {boolean}
 */
export function checkIsIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

/**
 * 判斷是否為IE瀏覽器
 * @returns {boolean}
 */
export function checkIsIE() {
    // @ts-ignore
    return (!!window.ActiveXObject || 'ActiveXObject' in window);
}

/**
 * 判斷是否為LINE瀏覽器
 * @returns {boolean}
 */
export function checkIsLine() {
    const u = navigator.userAgent;
    return u.includes('Line');
}

/**
 * 判斷是否為FB瀏覽器
 * @returns {boolean}
 */
export function checkIsFacebook() {
    const u = navigator.userAgent;
    return u.includes('FBAV');
}

/**
 * 判斷是否為微信瀏覽器
 * @returns {boolean}
 */
export function checkIsWechat() {
    const ua = navigator.userAgent.toLowerCase();
    // @ts-ignore
    return ua.match(/MicroMessenger/i) === 'micromessenger';
}

/**
 * 判斷是否為Safari
 * @returns {boolean}
 */
export function checkIsSafari() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.includes('safari') && !userAgent.includes('chrome');
}

/**
 * 判斷是否為PWA模式
 * @returns {boolean}
 */
export function checkIsPWA() {
    // @ts-ignore
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}

/**
 * 滾動條在Y軸上的滾動距離
 * @returns {number}
 */
export function getScrollTop() {
    let scrollTop = 0; let bodyScrollTop = 0; let
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

/**
 * 文檔的總高度
 * @returns {*|number}
 */
export function getScrollHeight() {
    let scrollHeight = 0; let bodyScrollHeight = 0; let
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

/**
 * 瀏覽器顯示的高度
 * @returns {number}
 */
export function getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}


/**
 * 取得目前瀏覽器寬度的RWD尺寸代號
 */
export const checkIsMobileByGridSize = () => {
    const width = window.innerWidth;
    let currentSize = 'xs';
    let size: 'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
    for(size in gridConfig.gridBreakpoints){

        // ex: 340 => 0(xs)
        //     800 => 768(md)
        if(width >= gridConfig.gridBreakpoints[size]){
            currentSize = size;
        }else{
            break;
        }
    }

    switch (currentSize) {
    case 'xs':
    case 'sm':
        return 'mobile';
    case 'md':
    case 'lg':
        return 'pad';
    default:
        return 'pc';
    }

};

