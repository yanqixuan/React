import React from 'react';
import logo from './logo.svg';
import Child from './Child';
import Child1 from './Child1'
import './App.css';
import Context from './Context';
import Context1 from './Context1';

class App extends React.Component {
  constructor(){
    super();  //继承原组件的属性
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }

  componentDidMount(){
    this.refs.stringRef.innerHTML = 'new String Ref'
    this.methodRef.innerHTML = 'new method Ref'
    this.objRef.current.innerHTML = 'new Object ref'
  }

  render() {
    const { count, showChild } = this.state;
    return (
      <div>

        <span ref="stringRef">
          react ref
        </span> <br/>
        <span ref={(ref)=> this.methodRef = ref}>
          method ref
        </span> <br/>
        <span ref={this.objRef}>
          object ref
        </span> <br/>

        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{
          __html:`<strong>strong</strong>`
        }}>

        </div>

        {/* props更新生命周期 */}
        <button onClick={this.handleChildPropsChange}>child Component props change</button>
        <button onClick={this.handleToggleChild}> toggle Child </button>
        {
          !showChild ? <Child count={count} /> : <Child1 count={count} />
        }

        {/* 所有放在中间的内容都当作props.children */}
        <Context>小花<p>我是一个p标签</p></Context> <br/>
        <Context1></Context1>

      </div>
    )
  }

}

export default App;
