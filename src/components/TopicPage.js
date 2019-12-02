import React, {Component} from 'react';
import axios from 'axios';
import TopicPageBanner from './TopicPageBanner';
import TopicPagePosts from './TopicPagePosts';
import { message } from 'antd';

class TopicPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: "",
            date: new Date().toLocaleString(),
            isMounting: true
        };
    }

    componentDidMount = async () =>  {

        axios({
            method: 'get',
            url: 'http://localhost:8080/trends/trendById/'+this.props.match.params.id
          })
          .then((res) => {
            var creationDate = res.data.creationDate;
            this.setState({
                id: res.data.id,
                name: res.data.name,
                date: new Date(creationDate).toDateString(),
                isMounting: false
            })
          }, () => {
            this.setState({
                date: null,
                isMounting: false
            })
            message.info("Iets ging mis bij het ophalen van de topic informatie");
          });
    }

    render() {
        if(this.state.isMounting) {
            return null;
        }
        return (
            <div id = "topicPageContent">
                <TopicPageBanner name={this.state.name} date={this.state.date} />
                <TopicPagePosts id={this.state.id} /> 
            </div>
        
        )
    }
}


export default TopicPage;

