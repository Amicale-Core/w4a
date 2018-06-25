import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class Book extends React.Component {
    state = {
        author: [],
        book: [],
        user: []
    }

    PropTypes = {
        id : PropTypes.string.isRequired
    }

    componentDidMount = () => {
        API.getBookById(this.props.match.params.id)
            .then(book => {
                if (book.UserId !== undefined) {
                    Promise.all([
                        API.getAuthorById(book.AuthorId),
                        API.getUserById(book.UserId)
                    ]).then(([author, user]) => this.setState({book: book, author: author, user: user}));
                } else {
                    API.getAuthorById(book.AuthorId)
                        .then(author => this.setState({book: book, author: author}));
                }
            });
    }

    render () {
        let book = this.state.book !== undefined ? this.state.book.title : "Not found";

        let author = this.state.author !== undefined ? this.state.author.firstname + " " + this.state.author.lastname : "Not found";

        let availability = this.state.user !== undefined ? "Book is borrowed by " + this.state.user.name : "Book is available";

        return (
            <div>
                <h1>{book}</h1>
              
                <h3>Author</h3>
                <p>
                    {author}
                </p>

                <p>
                    {availability}
                </p>
            </div>
        );
    }
}

export default Book;