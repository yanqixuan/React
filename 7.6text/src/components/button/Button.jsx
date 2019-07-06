import React, { Component } from 'react'
import './Button.css'
export class Button extends Component {
  state = {
    active:false
  }
  changeActive = () => {
    this.setState({
      active:!this.state.active
    })
    console.log('button')
  }
  render() {
    return (
      <div>
        <div onMouseDown={this.changeActive} onMouseUp={this.changeActive} className='button' style={this.state.active === true ? {backgroundColor:"plum"}: {} }>button</div>
      </div>
    )
  }
}

export default Button
