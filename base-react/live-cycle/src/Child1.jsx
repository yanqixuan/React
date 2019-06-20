import React from 'react'

class Child1 extends React.Component {
  state = {
    a:1
  }

  // 根据返回值{}  更新 state 不更新则return null
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps',props);
    return {
      ...props,
      ...state
    };
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return 888;
  }

  // 15.xxx a===undefined     16.xxx a===getSnapshotBeforeUpdate()
  componentDidUpdate(preProps,preState,a){
    console.log('componentDidUpdate',a)
  }

  handleStateChange = ()=>{
    this.setState({
      a:10
    })
  }

  render() {
    console.log('渲染时候的state',this.state,this.props);
    return (
      <div>
        <button onClick={this.handleStateChange}> change state </button>
        child1 Component
      </div>
    )
  }
}

export default Child1