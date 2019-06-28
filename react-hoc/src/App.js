import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ExampleMobx from './exampleMobx/index'
import ShopCart from './ShopCart'
import withLogin from './withLogin'
import exampleBase from './exampleBase/index'
import ExampleBounce from './ExampleBounce/index'
import './App.css';

const WithLoginStatus = withLogin(LoginStatus);
const WithShopCart = withLogin(ShopCart);
function App() {
  return (
    // <React.Fragment>
    <>
    <LoginStatus />
    <ShopCart a={1} b={2}/>
    {/* <WithLoginStatus/>
    <WithShopCart/> */}
    <ExampleMobx/>
    <ExampleBounce/>
    </>
    //  </React.Fragment>
  )
}

export default App;
