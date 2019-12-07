import {Component} from 'react'; 
import moment from 'moment'; 


class Footer extends Component {

    render() {
        return "\u00a9 Trendwatch " + moment().format("YYYY");;
    }
}


export default Footer;

