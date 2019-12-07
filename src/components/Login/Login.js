import React, {Component} from 'react';
import { message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }
    validateForm = () => { 
        if(this.state.username.length < 4) {
            message.info('The username must consist of atleast 4 characters');
            return false;
        }
        if (this.state.password.length < 6) {
            message.info('The password must consist of atleast 6 characters');
            return false;
        }
        return true;
    }
    async login() {
        const params = {
            username: this.state.username,
            password: this.state.password
        }
        let res = await axios.get('http://localhost:8080/users/userByCredentials/'+params.username+'/'+params.password);
                   
        if(res.data.username != null) {
            cookies.set('name', res.data.username, {path: '/'});
            cookies.set('id', res.data.id, {path: '/'});
            cookies.set('reputation', res.data.reputation, {path: '/'});
            this.props.loginSuccesfull();
        } else {
            message.info('The username or password is incorrect');
        }
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
     });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.validateForm()) {
            this.login();
        }
    }
    
    handleRegister = event => {
        event.preventDefault();
         if(this.validateForm()) {
            this.register();
         }
    }

    componentDidMount() {
        if(typeof cookies.get('name') != "undefined") {
            console.log("session still valid");
            this.props.loginSuccesfull();
        }
    }
    register ()  {
        
        const registerParams = new URLSearchParams(); 
        registerParams.append('username', this.state.username);
        registerParams.append('password', this.state.password);

        axios({
            method: 'post',
            url: 'http://localhost:8080/users',
            data: registerParams
          })
          .then(() => {
              message.info("The account has been created");
              this.login();
          }, () => {
            message.info("Failed to create account");
          });
    }

    render() {
        return (        
            <div><form id="login" onSubmit={this.handleSubmit}>
                <input type="text" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <input type="submit" value="Login" />
            </form>
            <form id="register" onSubmit={this.handleRegister}>
                <input type="submit" value="Register" />
            </form>
            </div>
        )}
    }

    Login.propTypes = {
        loginSuccesfull: PropTypes.func
    }


export default Login;

