import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom'
import './App.css';

// 组件
function Index(){
  return (
    <div>Home</div>
  )
}

function About(){
  return(
    <div>About</div>
  )
}

function User(){
  return (
    <div>User</div>
  )
}

function Protect(){
  return (
    <div>Protect</div>
  )
}

function Login(){
  return (
    <div>login</div>
  )
}

// 进入页面之前 检查 鉴权
// <PrivateRoute path="/user" component={User}></PrivateRoute>
function PrivateRoute(props){
  const {path,component:Component} = props;
  return (
    <Route path={path} render={
      ()=>{
        return  true ? <Component/> : 
        <Redirect to={{
          pathname:'./login'
        }}></Redirect>
      }
    }></Route>
  )
}

function App() {
  return (
    <Router>
      {/* 三个导航 */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">protect page</Link>
        </li>
      </ul>
      {
        true ? 
        // 从根路由开始   exact:只有精准匹配/路径才出现
        <Route path="/" exact component={Index}>
        </Route> : <div>no</div>
      }
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={Login}></Route>
       {/* 受保护的路由 自定义渲染 登录了就进入product,没有登录则重定向*/}
      <PrivateRoute path="/user" component={User}></PrivateRoute>
     
      <Route path="/protect" render={()=>{
        return false ? <Protect /> : <Redirect to={{
          pathname:'/login',
          state:{from:'/protect'}
        }}/>
      }}></Route>
    </Router>
  );
}

export default App;
