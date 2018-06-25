import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class AuthorFull extends React.Component {
    state = {
        authors : []
    };

    componentDidMount() {
        API.getAuthors()
            .then(res => this.setState({authors : res}));
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.authors != this.props.authors){
            this.setState({authors : prevProps.authors});
        }
    }

    render() {
        let authors = this.state.authors !== undefined ?
            this.state.authors.map((x, i) => <li key={i}><Link to={`/authors/${x.id}`}>{x.firstname} {x.lastname}</Link></li>) :
            "None";

        return (
          <div>
                <h1>Authors</h1>
                <ul>
                    {authors}
                </ul>
          </div>
        );
      }
}

export default AuthorFull;
