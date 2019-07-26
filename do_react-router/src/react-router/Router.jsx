import RouterContext from "./RouterContext";
import React from 'react'

class Router extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      location: props.history.location
    }
  }
  render() {
    return (
      // provider组件通过value提供值  
      <RouterContext.Provider children={this.props.children} value={{
        // context
        history: this.props.history, //调用组件时会传入一个history
        location: this.state.location //location改变会引起组件渲染
      }} />
    )
  }
}

export default Router