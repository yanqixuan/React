import React from 'react';
import { Button } from './components/button/Button'
import { Voice } from './components/voice/Voice'
import './App.css';

export default class App extends React.Component {
  state = {
    progress:0.5
  }
  render() {
    const { progress } = this.state
    return (
      <div>
        <Button/>
        <Voice progress={progress}/>
      </div>
    )
  }
}