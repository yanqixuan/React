import React from 'react';
import { Router } from '../react-router/index';
import { createBrowserHistory as createHistory } from "history";  //history包

// 根据不同的平台传递不同的history
class BrowserRouter extends React.Component {
  history = createHistory(this.props);
  render() {
    console.log(this.history)
    return (

      <Router history={this.history} children={this.props.children} />

    )
  }
}

export default BrowserRouter