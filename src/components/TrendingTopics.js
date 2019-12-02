import React , { Component}  from 'react';
import TrendingTopicItem from './TrendingTopicItem';
import axios from 'axios';

class TrendingTopics extends Component {

    state = {
        allTopics: []
    }
    
    render() {
        if(this.state.allTopics && !this.state.allTopics.length) {
            return <p>De lijst met trending topics kan niet worden opgehaald</p>
        }
            return this.state.allTopics.map((item) =>
                <TrendingTopicItem topic={item} key={item.id} />
            )
    }
    componentDidMount = () =>  {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        axios({
            method: 'get',
            url: 'http://localhost:8080/trends/mainPage'
        })
        .then((res) => {
            this.setState({
                allTopics: res.data
            })
        });
    }
}

export default TrendingTopics;
