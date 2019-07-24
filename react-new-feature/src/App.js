import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './ConcurrentMode/index';
import StateHook from './hook/stateHook'
import PrepareForEffectHook from './hook/prepareForEffectHook'
import EffectDemo from './hook/effectHook'
import ReducreHookDemo from './hook/ReducerHook'

function App() {
  return (
    <div className="App">
      {/* <ConcurrentModeDemo>
      </ConcurrentModeDemo> */}
      <PrepareForEffectHook /><br/>
      StateHook:
      <StateHook />
      EffectHook:
      <EffectDemo /><br/>
      ReducerHook:
      <ReducreHookDemo />
    </div>
  );
}

export default App;
