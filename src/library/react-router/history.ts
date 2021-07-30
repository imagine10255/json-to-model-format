import {createBrowserHistory} from 'history';
import {routePrefixPath} from 'config/app';

const history = createBrowserHistory({
    basename: routePrefixPath,
});
export default history;
