import gridConfig from 'config/grid';
import {version} from '../../../package.json';
import {ESiteEnv} from 'config/types';



function getSetupParam(){
    console.log('info: ', JSON.stringify({
        nodeEnv: process.env.NODE_ENV,
        siteEnv: (window as any).siteEnv as ESiteEnv,
        siteCode: (window as any).siteCode as string,
        version: version,
    }));

    return {gridConfig};
}

export default getSetupParam;
