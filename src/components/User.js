import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

const cookies = new Cookies();
class User extends Component {

    render() {
        return(
            <form onSubmit={this.handleLogout}>
              <p>Welkom {cookies.get('name')} je hebt {cookies.get('reputation')} reputatie</p>
              <input type="submit" value="Log out" />
            </form>
        );
    }

    handleLogout = event => {
        event.preventDefault();
        this.logout();
    }

    logout = () => {
        cookies.remove('name', { path: '/' });
        cookies.remove('reputation', { path: '/' });
        cookies.remove('id', { path: '/' });
        this.props.logout();
    }
}

User.propTypes = {
    logout: PropTypes.func.isRequired
}

export default User;

