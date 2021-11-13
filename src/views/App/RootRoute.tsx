import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';


// Views
import NotFound from 'views/NotFound';
import JsonToDart from 'views/JsonToDart';
import JsonToTypescript from 'views/JsonToTypescript';


const RootRoute = () => {
    return <Router >
        <Switch>
            <Route path="/to-dart" exact component={JsonToDart}/>
            <Route path="/to-typescript" exact component={JsonToTypescript}/>
            <Route path="/" exact children={<Redirect to="/to-dart"/>}/>

            {/* NotFound */}
            <Route path="*" children={<NotFound/>}/>
        </Switch>
    </Router>
};

export default RootRoute;
