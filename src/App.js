import React, { Component} from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';
import TrendingTopics from './components/TrendingTopics/TrendingTopics';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import InfoPage from './components/infoPage/InfoPage';
import User from './components/User/User';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/Search/Search';
import TopicPage from './components/TopicPage/TopicPage';


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
        <Route exact path="/trendwatchFrontend2/">
          <div id="banner"><Banner /></div>
          <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
          <div id="user"></div>
          <div id="infoPage"><InfoPage /></div>
          <div id="trendingTopic"> <TrendingTopics /></div>
          <div id="search"><Search /></div> 
          <div id="footer"><Footer /></div>
        </Route>
          <Route path="/trendwatchFrontend2/profile">
            <div id="banner"><Banner /></div>
            <p>TIETEN</p>
            <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
            <div id="user"><User logout={this.logout}/></div>
            <div id="footer"><Footer /></div>
          </Route>
          <Route path="/trendwatchFrontend2/profile/:id" component={ProfilePage}></Route>
          <Route path="/trendwatchFrontend2/topic">
            <div id="banner"><Banner /></div>
            <div id="login"><Login loginSuccesfull={this.loginSuccesfull}/></div>
            <div id="user"><User logout={this.logout}/></div>
            <div id="footer"><Footer /></div>
          </Route>
          <Route path="/trendwatchFrontend2/topic/:id" component={TopicPage}></Route>
      </Router>
    </div>
  );
  }
}

export default App;
