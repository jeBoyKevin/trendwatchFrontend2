import React, { Component} from 'react';
import './App.css';
import Banner from './components/Banner';
import TrendingTopics from './components/TrendingTopics';
import Login from './components/Login';
import Footer from './components/Footer';
import InfoPage from './components/InfoPage';
import User from './components/User';
import ProfilePage from './components/ProfilePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/Search';
import TopicPage from './components/TopicPage';


class App extends Component {

  loginSuccesfull = () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("user").style.display = "block";
    ReactDOM.render(<User logout={this.logout}/> , document.getElementById("user"));
  }

  logout = () => {
    document.getElementById("user").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
  render() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <div id="banner"><Banner /></div>
          <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
          <div id="user"></div>
          <div id="infoPage"><InfoPage /></div>
          <div id="trendingTopic"> <TrendingTopics /></div>
          <div id="search"><Search /></div> 
          <div id="footer"><Footer /></div>
        </Route>
          <Route path="/profile">
            <div id="banner"><Banner /></div>
            <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
            <div id="user"><User logout={this.logout}/></div>
            <div id="footer"><Footer /></div>
          </Route>
          <Route path="/profile/:id" component={ProfilePage}></Route>
          <Route path="/topic">
            <div id="banner"><Banner /></div>
            <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
            <div id="user"><User logout={this.logout}/></div>
            <div id="footer"><Footer /></div>
          </Route>
          <Route path="/topic/:id" component={TopicPage}></Route>
      </Router>
    </div>
  );
  }
}

export default App;
