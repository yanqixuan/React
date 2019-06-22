import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import 'antd/dist/antd.css';
// import './App.css';
import PageLayout from './page/Layout';

// function Table(){
//   return (
//     <div>table</div>
//   )
// }

// function Label(){
//   return (
//     <div>label</div>
//   )
// }

function App() {
  return (
    <Router>
      {/* 需要一个根路由 */}
      <Route path="/" component={PageLayout}>
        
      </Route>
    </Router>
  );
}

export default App;
