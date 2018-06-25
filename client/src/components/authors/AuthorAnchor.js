import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthorFull from './AuthorFull.js';
import Author from './Author.js';

const AuthorAnchor = (props) => (
    <Switch>
        <Route exact path="/authors" component={AuthorFull} />
        <Route exact path="/authors/:id" component={Author} />
    </Switch>
);

export default AuthorAnchor;
