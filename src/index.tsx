import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App/AppJs';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import OpenWindow from './library/open-window';



declare global {
    interface Window {
        openWindow: any;
    }
}

// 免轉錢包: 只能開一個視窗, 中心錢包: 多開視窗
window.openWindow = new OpenWindow('startLobbyWindow', false);


if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/en'); // Add locale data for de
    require('@formatjs/intl-pluralrules/locale-data/zh'); // Add locale data for de
}

// @ts-ignore
if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/locale-data/en'); // Add locale data for de
    require('@formatjs/intl-relativetimeformat/locale-data/zh'); // Add locale data for de
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
