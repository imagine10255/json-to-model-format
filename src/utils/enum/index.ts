/**
 * 物件(KeyVal)使用Value查Key
 * @param obj
 * @param findValue
 */
export function enumGetKeyByVal(obj: {[key: string]: any}, findValue: string) {
    if(obj){
        for (const key in obj) {
            if (obj[key] === findValue) {
                return key;
            }
        }
    }

    return undefined;
}


