import React, {Component} from 'react';
import { message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

class ProfilePage extends Component {

    state = {
        bio: "",
        username: "",
        reputation: 0,
        errorMessage: ""
    }

    render() {
        return <div id="profilePage">
            <h1>{this.state.username}</h1>
            <p>{this.state.reputation}</p>
            <p>{this.state.bio}</p>
            </div>;
    }

    componentDidMount = async () =>  {

        axios({
            method: 'get',
            url: 'http://localhost:8080/users/userById/'+ this.props.match.params.id
          })
          .then((res) => {
              if (res.data.username != null) {
                this.setState({ 
                    bio: res.data.bio,
                    username: res.data.username,
                    reputation: res.data.reputation
                })
                if(this.state.bio === "") {
                    message.info("Dit profiel heeft geen bio toegevoegd");
                }
              }
          }, () => {
            message.info("Dit profiel bestaat niet");
          });
    }
}


export default ProfilePage;

