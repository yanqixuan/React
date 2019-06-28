import React, { Component } from 'react'
import { debounce,decDebounce,decArrowDebounce,decDisplayName } from './util';
// 防抖 一个事件触发很多次 在多少秒后才执行事件

@decDisplayName('CustomExampleDebounce')  //加了一个静态属性 displayName 修改了ExampleDebounce的name为CustomExampleDebounce
class ExampleDebounce extends Component {
  state={}

  @decDebounce(1000)
  handleSubmit(){
    console.log('submit request')
  }
  // handleSubmit = debounce(function(){
  //   console.log('request submit')
  // },1000)

  @decArrowDebounce(1000)
  handleBuy = ()=>{
    console.log('buy now')
  }
  render() {
    console.log(this.handleSubmit);
    console.log(this.handleBuy);
    return (
      <div>
        <button onClick={this.handleSubmit}>提交订单</button>
        <button onClick={this.handleBuy}>立即购买</button>
      </div>
    )
  }
}

export default ExampleDebounce
