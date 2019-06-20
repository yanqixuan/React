import React from 'react';
import logo from './logo.svg';
import Child from './Child';
import Child1 from './Child1'
import './App.css';

class App extends React.Component {
  state ={
    count:0,
    showChild:true
  }
  handleToggleChild = ()=>{
    const {showChild} = this.state;
    this.setState({
      showChild:!showChild
    })
  }
  handleChildPropsChange = ()=>{
    let {count} = this.state;
    count ++;
    this.setState({
      count
    })
  }
  render() {
    const {count,showChild} = this.state;
    return (
      <div>
        {/* props更新生命周期 */}
        <button onClick={this.handleChildPropsChange}>child Component props change</button>
        <button onClick={this.handleToggleChild}> toggle Child </button>
        {
          !showChild ? <Child count={count} /> : <Child1 count={count}/>
        }
        
      </div>
    )
  }

}

export default App;
