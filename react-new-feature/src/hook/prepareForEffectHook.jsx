// 用hooks之前的写法
import React, { Component } from 'react'

export class Index extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth, //屏幕可见区域宽度
      height: document.documentElement.clientHeight
    }
  }
  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener('resize', this.handleResize);
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth, //屏幕可见区域宽度
        height: document.documentElement.clientHeight
      }
    })
  }
  render() {
    const { count, size } = this.state
    return (
      <button onClick={() => {
        this.setState({
          count:count +1
        })
      }}>
        click: {count},
        size: {size.width}X{size.height}
      </button>
    )
  }
}

export default Index
