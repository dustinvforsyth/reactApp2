import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './App';
import './index.css';
import Home from './pages/home.js';
import Suzuki from './pages/suzuki.js';
import Toyota from './pages/toyota.js';



ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute name="home" component={Home}></IndexRoute>
          <Route path="suzuki" name="suzuki" component={Suzuki}></Route>
          <Route path="toyota" name="toyota" component={Toyota}></Route>
        </Route>
      </Router>,
  document.getElementById('root')
);


