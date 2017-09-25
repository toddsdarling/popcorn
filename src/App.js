import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Dashboard from './dashboard/dashboard';
import SaleScreen from './sale/salesScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>          
              <Route exact path='/' component={Dashboard}/>
              <Route path='/sale/new' component={SaleScreen}/>
            </Switch>
        </div>
      </Router>


    );
  }
}

export default App;
