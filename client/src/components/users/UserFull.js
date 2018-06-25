import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import API from '../../api/index';

class UserFull extends React.Component {
    state = {
        users : []
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({users : res}));
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.users != this.props.users){
            this.setState({users : prevProps.users});
        }
    }

    render() {
        let users = this.state.users !== undefined ?
            this.state.users.map((x, i) => <li key={i}><Link to={`/users/${x.id}`}>{x.name}</Link></li>) :
            "None";

        return (
          <div>
                <h1>Users</h1>
                <ul>
                    {users}
                </ul>
          </div>
        );
      }
}

export default UserFull;
