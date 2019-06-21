配置是静态路由
动态路由(组件),可以根据逻辑判断路由
cnpm i react-router-dom -S

## React Router
- exact
   精准匹配,防止父组件一直存在

- <Router>
    <Route path="/about" component={About}></Route>
  </Router>

- 受保护的路由
  1. 使用自定义渲染
      <Route path="/protect" render={()=>{
        return false ? <Protect /> : 
        <Redirect to={{
          pathname:'/login',          去到login页面
          state:{from:'/protect'}     来自protect页面
        }}/>
      }}></Route>

  2. 使用自定义组件 在此组件中自定义渲染
      <PrivateRoute path="/user" component={User}></PrivateRoute>
      function PrivateRoute(props){
        const {path,component:Component} = props;
        return (
          <Route path={path} render={
            ()=>{
              return  true ? <Component/> : 

              <Redirect to={{         //重定向
                pathname:'./login'
              }}></Redirect>

            }
          }></Route>
        )
      }
