import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ShopCart from './ShopCart'
import withLogin from './withLogin'
import './App.css';

const WithLoginStatus = withLogin(LoginStatus);
const WithShopCart = withLogin(ShopCart);
function App() {
  return (
    // <React.Fragment>
    <>
    <LoginStatus/>
    <ShopCart/>
    <WithLoginStatus/>
    <WithShopCart/>
    </>
    //  </React.Fragment>
  )
}

export default App;
