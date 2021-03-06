import {GridThemeProvider} from 'library/styled-bs-grid';
import getSetupParam from './setup';

import RootRoute from './RootRoute';




const setup = getSetupParam();


const App = () => {
    return (
        <GridThemeProvider gridTheme={setup.gridConfig}>
            <RootRoute/>
        </GridThemeProvider>
    );
};

export default App;


