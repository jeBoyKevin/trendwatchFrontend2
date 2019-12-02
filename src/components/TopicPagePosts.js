import React, {Component} from 'react';
import axios from 'axios';
import TopicPagePost from './TopicPagePost';

class TopicPagePosts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allPosts: []
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/posts/postByTrend/'+this.props.id
        })
        .then((res) => {
            this.setState({
                allPosts: res.data
            })
        });
    }

    render() {
        return (
            this.state.allPosts.map((item) =>
                <TopicPagePost message={item} key={item.id} />
            )
        )
    }
}


export default TopicPagePosts;

