import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class Author extends React.Component {
    state = {
        author: [],
        books: []
    }

    PropTypes = {
        id : PropTypes.string.isRequired
    }

    componentDidMount = () => {
        Promise.all([
            API.getAuthorById(this.props.match.params.id),
            API.getBooksByAuthor(this.props.match.params.id)
        ])
        .then(([author, books]) => this.setState({ author: author, books: books }));
    }

    render () {
        return (
            <div>
                <h1>{this.state.author.firstname} {this.state.author.lastname}</h1>
              
                <h3>Written books :</h3>
                <ul>
                    {this.state.books.map((x, i) => <li key={i} >{x.title} - <Link to={`/books/${x.id}`}>Details</Link></li>)}
                </ul>
            </div>
        );
    }
}

export default Author;