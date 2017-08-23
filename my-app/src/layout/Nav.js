import React, { Component } from 'react';
import '../App.css';
import newLogo from '../nav-logo.png';
import { Link } from 'react-router'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img src={newLogo} className="App-logo" alt="logo" /></a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="suzuki">Suzuki</Link></li>
            <li><Link to="toyota">Toyota</Link></li>
            <li><Link to="nissan">Nissan</Link></li>
            <li><Link to="builderParts">Builder Parts</Link></li>
            <li><Link to="recovery">Recovery</Link></li>
            <li><Link to="accessories">Accessories</Link></li>
            <li><Link to="apparel">Apparel</Link></li>
            <li><Link to="instructions">Instructions</Link></li>
            <li><Link to="blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}