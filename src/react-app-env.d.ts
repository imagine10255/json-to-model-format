/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
            readonly REACT_APP_SITE_ENV: 'dev'|'stage'|'prod';
            readonly REACT_APP_SITE_CODE: string;
            readonly REACT_APP_SITE_NAME: string;
            readonly REACT_APP_SITE_DESC: string;
    }
}
