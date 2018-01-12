import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Button color="primary">
          Login via Facebook
        </Button>
      </div>
    );
  }
}

export default Login;
