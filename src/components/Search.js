import React, {Component} from 'react';
import SearchResults from './SearchResults';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ""
        };
    }

    handleChange = async event => {
        await this.setState({
            query: event.target.value
        })
       this.SearchResults.sendPost(this.state.query);
    }

    render() {
        return(
        <div id="form">
            <input type="search" onChange={this.handleChange} placeholder="Search topic"/>
            <SearchResults onRef={ref => (this.SearchResults = ref)} />
        </div>
        )};
}


export default Search;

