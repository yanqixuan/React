import React, { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
  render(){
    return (
      <RouterContext.Consumer>
        {
          (context) => {  //context 为 Provider 上的value
            const location = context.location //window.location
            console.log(context)
            //用当前的location，与组件上的配置的path匹配，判断是否显示此路由
            const match = matchPath(location.pathname, this.props) ;
            const { Component } = this.props
            return (
              <RouterContext.Provider>
                {
                  match && <Component />
                }
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Route