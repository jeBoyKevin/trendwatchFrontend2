import React, { Component } from 'react';

class TrendingTopicItem extends Component {

    render() {
        return <a href={"/topic/" + this.props.topic.id}>{this.props.topic.name} <span>{this.props.topic.updates} update(s)</span></a>
    }
}
export default TrendingTopicItem;
