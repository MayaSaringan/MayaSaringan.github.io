import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './App';
import Blogs from './Blogs'
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


ReactDOM.render(
  <Router >
      <Switch>
    <Route exact path='/' component={Portfolio} />
    <Route exact path='/blogs' component={Blogs} />
    </Switch>
    </Router>,
  document.getElementById('root')
);