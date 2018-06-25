import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class BookFull extends React.Component {
    state = {
        books : []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({books : res}));
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.books != this.props.books){
            this.setState({books : prevProps.books});
        }
    }

    render() {
        let books = this.state.books !== undefined ?
            this.state.books.map((x, i) => <li key={i}><Link to={`/books/${x.id}`}>{x.title}</Link></li>) :
            "None";

        return (
          <div>
                <h1>Books</h1>
                <ul>
                    {books}
                </ul>
          </div>
        );
      }
}

export default BookFull;
