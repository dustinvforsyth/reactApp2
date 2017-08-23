import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import './App.css';
import newLogo from './nav-logo.png';
import nissanLogo from './Nissan-logo.png';
import zukiLogo from './suzuki-logo.gif';
import yotaLogo from './Toyota-logo.png';
import NavBar from './layout/Nav.js';
import Banner from './layout/Banner.js';
import Home from './pages/home.js';
import Suzuki from './pages/suzuki.js';
import Toyota from './pages/toyota.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <p className="App-intro">
          <Banner></Banner>
        </p>
      </div>
    );
  }
}


export default App;
