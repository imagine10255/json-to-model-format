enum EDepositMethodCodes {
    onlineBank='onlineBank',
    onlineBankPlus='onlineBankPlus',
    speedOnlineBank='speedOnlineBank',
    atm='atm',
    atmPlus='atmPlus',
    dPay='dPay',
    iCard='iCard',
    pointCard='pointCard',
    wechat='wechat',
    // alipay='alipay',
}



const MapFactoryMethodCode = new Map<string, EDepositMethodCodes>([
    ['WebBank', EDepositMethodCodes.onlineBank],
    ['WebBankPlus', EDepositMethodCodes.onlineBankPlus],
    ['SpeedWebBank', EDepositMethodCodes.speedOnlineBank],
    ['Bank', EDepositMethodCodes.atm],
    ['BankPlus', EDepositMethodCodes.atmPlus],
    ['iPay', EDepositMethodCodes.dPay],
    ['iCard', EDepositMethodCodes.iCard],
    ['PointCard', EDepositMethodCodes.pointCard],
    ['Wechat', EDepositMethodCodes.wechat],
    // ['Alipay', EDepositMethodCodes.alipay],
]);


export {
    EDepositMethodCodes,
    MapFactoryMethodCode,
};
