import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import Home from './home';
import UserAnchor from './users/UserAnchor';
import AuthorAnchor from './authors/AuthorAnchor';
import BookAnchor from './books/BookAnchor';

class App extends React.Component {

	render() {
		return (
			<div>
				<p>
					<Link to="/">Home</Link> / <Link to="/users">Users</Link> / <Link to="/authors">Authors</Link> / <Link to="/books">Books</Link>
				</p>
				<hr />
				<Route path="/" exact component={Home} />
				<Route path="/users" component={UserAnchor} />
				<Route path="/authors" component={AuthorAnchor} />
				<Route path="/books" component={BookAnchor} />
			</div>
		);
	}
};

export default App;
