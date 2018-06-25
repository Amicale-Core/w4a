import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class User extends React.Component {
    state = {
        user : [],
        books: []
    }

    PropTypes = {
        id : PropTypes.string.isRequired
    }

    componentDidMount = () => {
        Promise.all([
            API.getUserById(this.props.match.params.id),
            API.getBooksByUser(this.props.match.params.id)
        ])
        .then(([user, books]) => this.setState({ user: user, books: books }));
    }

    render () {
        return (
            <div>
                <h1>{this.state.user.name}</h1>
              
                <h3>Borrowed books :</h3>
                <ul>
                    {this.state.books.map((x, i) => <li key={i} >{x.title} - <Link to={`/books/${x.id}`} >Details</Link></li>)}
                </ul>
            </div>
        );
    }
}

export default User;