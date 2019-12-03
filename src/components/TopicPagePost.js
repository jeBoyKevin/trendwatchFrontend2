import React, {Component} from 'react';
import { TiThumbsUp } from "react-icons/ti";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
import 'antd/dist/antd.css';

const cookies = new Cookies();
class TopicPagePost extends Component {
    render() {
        return(
            <div id="topicPagePost">
                <a className="sender" href={"/trendwatchFrontend2/profile/" + this.props.message.sender.id}>{this.props.message.sender.username}</a>
                <p className="date">{new Date(this.props.message.date).toDateString()}</p>
                <p className="message">{this.props.message.message}</p>
                <p className="updoots" id={this.props.message.id}>{this.props.message.updoots}</p>
                <span className="thumb"onClick={() => { this.upDootClicked() }}><TiThumbsUp /></span>
            </div>
        )
    };

    upDootClicked = async () => {
        if(cookies.get('id') > 0) {

            const updootParams = new URLSearchParams(); 
            updootParams.append('postId', this.props.message.id);
            updootParams.append('userId', cookies.get('id'));
            axios({
                method: 'post',
                url: 'http://localhost:8080/updoots',
                data: updootParams
              })
              .then(() => {
                var oldScore = document.getElementById(this.props.message.id).innerHTML;
                var value = parseInt(oldScore) + 1;
                document.getElementById(this.props.message.id).innerHTML = value;
              }, () => {
                  message.info('Je hebt deze post al geüpdoot');
              });
        }
        else {
            message.info("Je moet ingelogd zijn om te kunnen updooten");
        }
    }
}

export default TopicPagePost;

