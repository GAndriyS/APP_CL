import React, { Component } from 'react';
import Button from 'material-ui/Button';
import axios from 'axios';

import './Login.css';

class Login extends Component {
  login() {
    axios
      .get('/auth/facebook/', {
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Login">
        <Button color="primary" onClick={this.login}>
          Login via Facebook
        </Button>
      </div>
    );
  }
}

export default Login;
