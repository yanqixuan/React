import React from 'react'
// 返回一个对象 有两个组件
const ThemContext = React.createContext({
  theme:'purple'
})

class MyButton extends React.Component{
  render(){
    return (
      <ThemContext.Consumer>
        {
          (value)=>{
            return (
              <button onClick={value.handleToggleBlue} style={{
                backgroundColor: value.theme
              }}>
                {this.props.children}
              </button>
            )
          }
        }
      </ThemContext.Consumer>
    )
  }
}

class Message extends React.Component {
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}


class Context1 extends React.Component{
  constructor(){
    super();
    this.handleToggleBlue = ()=>{
      this.setState(state => {
        return {
          theme:'blue'
        }
      })
    }
    this.state ={
      theme:'purple',
      handleToggleBlue:this.handleToggleBlue
    }
  }
  // state = {} static静态属性
  // state ={
  //   theme:'purple',
  //   handleToggleBlue:this.handleToggleBlue
  // }
  handleToggleTheme = ()=>{
    this.setState({
      theme:'red'
    })
  }

  // handleToggleBlue = ()=>{
  //   console.log(this)
  //   this.setState({
  //     theme:'blue'
  //   })
  // }

  render(){
    const msg = ['msg1','msg2','msg3']
    return (
      // 提供数据
      <ThemContext.Provider value={this.state}>
        <button onClick={this.handleToggleTheme}> toggle theme</button>
        {
          msg.map((msg,i)=>{
            return <Message key = {i} text = {msg}/>
          })
        }
      </ThemContext.Provider>
    )
  }
}

export default Context1;