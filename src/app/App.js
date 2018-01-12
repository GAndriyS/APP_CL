import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/Login';

import './App.css';

class App extends Component {
  render() {
    let loggedIn = false;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            loggedIn ? <Redirect to="/dashboard" /> : <Login />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
