import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ClientAddPanel from './components/ClientAddPanel';
import ClientListPanel from "./components/ClientListPanel";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={ClientListPanel}/>
        <Route path="clients/new" component={ClientAddPanel}/>
        {/*<Route path="posts/:id" component={PostDetails}/>*/}
    </Route>
);