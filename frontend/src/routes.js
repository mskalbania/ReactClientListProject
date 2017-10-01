import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import ClientList from "./components/ClientList";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={ClientList}/>
        {/*<Route path="posts/new" component={PostCreate}/>*/}
        {/*<Route path="posts/:id" component={PostDetails}/>*/}
    </Route>
);