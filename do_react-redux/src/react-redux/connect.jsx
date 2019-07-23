import React, { Component } from 'react'
import { Consumer } from './context'
export default (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
  // 传两层，一层是参数，一层是组件，因为connect会返回一个组件
  class ConnectComponent extends Component {
    render () {
      return (
        <Consumer>
          {
            (store) => {
              const state = store.state;
              const dispatch = store.dispatch;
              let filterProps = {}; //放置所有的props
              if(typeof mapDispatchToProps === 'function'){
                Object.assign(filterProps, mapDispatchToProps(dispatch))
              }
              if(typeof mapStateToProps === 'function'){
                Object.assign(filterProps, mapStateToProps(state))
              }
              
              return (<WrappedComponent {...filterProps} {...this.props} />)
            }
          }
        </Consumer>
      );
    }
  }
  return ConnectComponent;
}