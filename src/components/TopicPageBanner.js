import React, {Component} from 'react';

class TopicPageBanner extends Component {

    render() {
        return (
        <div id="topicPageBanner">
            <h1>{this.props.name}</h1>
            <p>Creation date: {this.props.date}</p>
        </div>
        )
    }
}


export default TopicPageBanner;

