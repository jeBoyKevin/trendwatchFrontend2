import React, {Component} from 'react';
import axios from 'axios';
import SearchResult from '../SearchResult/SearchResult';

class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
            allTopics: []
        };
    }

    componentDidMount() {
        this.props.onRef(this)
      }

    async sendPost(query) {
        if(query.trim() === ""){
            return;
        }
        axios({
            method: 'get',
            url: 'http://localhost:8080/trends/trendByKeyword/'+query
          })
          .then((res) => {
            this.setState({
                allTopics: res.data
            })
            this.render();
          });
    }
    
    render() {
        return(
            <div>
                 {this.state.allTopics.map((item) => <SearchResult key={item.id} id={item.id} name={item.name} />)}
            </div>
        )
    };
}


export default SearchResults;

