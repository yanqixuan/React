import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './Scroll.styl'
// <Scroll> 1 2 3 </Scroll>
class Scroll extends Component {
  state = { }
  componentDidUpdate() {
    if(this.bscroll && this.props.refresh) {
      this.bscroll.refresh()
    }
  }
  componentDidMount() {
    if(!this.bscroll) {
      this.bscroll = new BScroll(this.refs.scrollView, {
        // 阴影度
        probeType: 3,
        // click: this.props.click
        click:() => {}
      })
    }
    // 通知父级 发生了 滚动事件
    this.bscroll.on('scroll', (e) => {
      this.props.onScroll(e)
    })
  }
  componentWillUnmount() {
    this.bscroll = null
  }
  render() {
    // console.log(this.bscroll)
    return (
      <div className="scroll-view"
      ref="scrollView"
      >
        { this.props.children }
      </div>
    )
  }
}

export default Scroll
