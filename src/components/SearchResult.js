import React, {Component} from 'react';

class SearchResult extends Component {
    
    render() {
        return(
            <div id="searchResult" onClick={() => { this.topicClicked() }}><a href={"/trendwatchFrontend2/topic/" + this.props.id}>{this.props.name}</a></div>
        )
    };

    topicClicked = () => {
        console.log(this.props.name);
    }
}

export default SearchResult;

