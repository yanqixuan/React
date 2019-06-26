import React, { Component } from 'react'
import { connect } from 'react-redux'; //connect 高阶组件

let generateID = -1;
class AddTo extends Component {
  render() {
    const { dispatch } = this.props;
    console.log(this.props);
    return (
      <div>
        <form onSubmit = {e =>{
          e.preventDefault();
          if(this.inputNode.value.trim()){
            // 添加
            generateID++
            dispatch({
              type:'ADD_TODO',
              id:generateID,
              text:this.inputNode.value.trim()
            })
          }
        }} >
          <input type="text" ref={node=>this.inputNode = node}/>
          <button type='submit'>AddTodo</button>
        </form>
      </div>
    )
  }
}

// 第一个函数，mapStateToProps  将状态映射为 props
// 第二个函数, mapDispatchToProps   将dispatch映射为 props
// export default connect(
//   (state)=>{
//   console.log('connect',state)
//   return {a:1}
//   },
//   (dispatch)=>{
//   return {
//     b:()=>{
//       console.log('b')
//     }
//   }
// })(AddTo);

export default connect()(AddTo)

