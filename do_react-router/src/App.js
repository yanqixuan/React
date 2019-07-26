import React from 'react';
import { BrowserRouter, Route } from './react-router-dom/index'
import logo from './logo.svg';
import './App.css';

function Home () {
  return "Home"
}

function Detail () {
  return "Detail"
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>home</li>
          <li>detail</li>
        </ul>
        <Route path="/" Component={Home} />
        <Route path="/detail" Component={Detail} />
      </BrowserRouter>
    )

  }
}

export default App;
