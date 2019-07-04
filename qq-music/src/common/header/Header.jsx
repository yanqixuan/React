import React, { Component } from 'react'
import './header.styl'
class Header extends Component {
  handleback = () => {
    // if(this.props.history){
    //   // 前进为 push 后退为 pop
    //   this.props.history.pop();
    // }
    window.history.back();
  }
  render() {
    return (
      <div className='music-header'>
        <span className="header-back" onClick={this.handleback}>
          <i className="icon-back"></i>
        </span>
        <div className="header-title">
          { this.props.title }
        </div>
      </div>
    )
  }
}

export default Header
