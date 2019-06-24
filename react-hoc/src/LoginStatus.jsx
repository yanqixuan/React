import React, { Component } from 'react'
import withLogin from './withLogin'

@withLogin
class LoginStatus extends Component {
  render() {
    return (
      <button>已经登录</button>
    );
  }
}

export default LoginStatus;