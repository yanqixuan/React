import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ShopCart from './ShopCart'
import withLogin from './withLogin'
import './App.css';

const withLoginStatus = withLogin(LoginStatus);
const withShopCart = withLogin(ShopCart);
function App() {
  return (
    // <React.Fragment>
    <>
    <LoginStatus/>
    <ShopCart/>
      {/* <withLoginStatus/>
      <withShopCart/> */}
    </>
    //  </React.Fragment>
  )
}

export default App;
