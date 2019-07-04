import React, { Component } from 'react'
import { Provider } from 'react-redux';
import App from './App'
import store from '../redux/store'
// 新的入口文件

export class Root extends Component {
  render() {
    return (
      <Provider store = {store}>
        <App/>
      </Provider>
    )
  }
}

export default Root
