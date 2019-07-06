import React, { Component } from 'react'
import './voice.css'
export class Voice extends Component {
  state = {
    progress: 0,
    leftNum: 0
  }
  onTouchStart = () => {
    console.log('onTouchStart')
  }
  onTouchMove = (e) => {
    let x = e.touches[0].clientX - 35
    let clientWidth = this.state.clientWidth
    let leftNum = x - 10
    if (x > 0 && x < 300) {
      this.setState({
        leftNum
      })
    }


    console.log('touchMove', this.state.progress, x, clientWidth)
  }
  componentDidMount = () => {
    const progress = this.props.progress
    console.log(this.refs.line.clientWidth)
    // this.refs.line
    let leftNum = this.refs.line.clientWidth * progress - 10
    this.setState({
      clientWidth: this.refs.line.clientWidth,
      progress,
      leftNum
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='voice-line' ref='line'>
          <div className = 'voice-left-line' style={{ width:this.state.leftNum + 10}}>
            <div className='voice-button' style={{ left: this.state.leftNum }}
            onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Voice
