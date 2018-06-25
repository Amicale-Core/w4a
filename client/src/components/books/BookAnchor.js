import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookFull from './BookFull.js';
import Book from './Book.js';

const BookAnchor = (props) => (
    <Switch>
        <Route exact path="/books" component={BookFull} />
        <Route exact path="/books/:id" component={Book} />
    </Switch>
);

export default BookAnchor;
