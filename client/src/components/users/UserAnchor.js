import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserFull from './UserFull.js';
import User from './User.js';

const UserAnchor = (props) => (
    <Switch>
        <Route exact path="/users" component={UserFull} />
        <Route exact path="/users/:id" component={User} />
    </Switch>
);

export default UserAnchor;
