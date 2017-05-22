import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            {/*about with no / nested inside main we still get the Main component*/}
            <IndexRoute component={Weather}/>
            {/*IndexRoute because we want Weather on the main page but not always on the main page*/}
        </Route>
    </Router>,
    document.getElementById('app')
);
