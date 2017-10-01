import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import ClientListPanel from "./components/ClientList";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={ClientListPanel}/>
        {/*<Route path="posts/new" component={PostCreate}/>*/}
        {/*<Route path="posts/:id" component={PostDetails}/>*/}
    </Route>
);