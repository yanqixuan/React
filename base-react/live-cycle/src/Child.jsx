import React from 'react';
class Child extends React.Component {
  // state更新
  state = {
    childcount: 0
  }
  handleChildCountChange = () => {
    let { childcount } = this.state;
    childcount++;
    this.setState({
      childcount
    })
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('did')
    this.interval = setInterval(() => {
      console.log('子定时器')
    }, 1000);
  }
  // props 更新
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  // 组件性能优化，控制不必要的更新
  shouldComponentUpdate(nextProps, nextState) {  //返回 true or false
    if (nextProps.count !== this.props.count) {
      return true;
    }
    // return false;
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('willUnmount')
    clearInterval(this.interval)
  }
  render() {
    const { count } = this.props;
    const { childcount } = this.state;
    console.log('render')
    return (
      <div>
        <button onClick={this.handleChildCountChange}>
          child state change
        </button>
        <br />
        count:{count}
        <br />
        childcount:{childcount}
        <br />
        child Component
      </div>
    )
  }
}

export default Child;