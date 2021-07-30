import {ECountry} from './types';

const routePrefixPath = '';

const clientId = '354C967A20E44811B4D9EF0802CC52F3';

// 時區識別代號
const timezoneCode = {
    [ECountry.malaysia]: 'Asia/Kuching',
    [ECountry.china]: 'Asia/Shanghai',
    [ECountry.thailand]: 'Asia/Bangkok',
    [ECountry.vietnam]: 'Asia/Ho_Chi_Minh',
    [ECountry.indonesia]: 'Asia/Jakarta',
};

export {
    clientId,
    routePrefixPath,
    timezoneCode,

};
