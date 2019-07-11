import { state } from './redux/state'
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/createStore'

const { store, dispatch, subscribe } = createStore(state,storeChange)

// // 要实现管理状态
// function dispatch(state,action){
//   // 状态的修改是可预期的
//   switch(action.type) {
//     case 'HEAD_COLOR':
//       state.head.color = action.color
//       break;
//     case 'BODY_TEXT':
//       state.body.text = action.text
//       break;
//     default:
//       break;
//   }

// }



function renderHead(state){
  console.log('render head');
  // 两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
  // 修改状态
  // state.body.text = '我是经过 head修改的body'
  
}

function renderBody(state){
  console.log('render body')
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp(newState, state={}){
  if( newState === state) return ;
  newState.head !== state.head &&
  renderHead(newState.head);  // 在其中更新body需要的 new state
  newState.body !== state.body &&
  renderBody(newState.body);  // old state 接收的不是改变后的state
}

subscribe((newStore,store) => renderApp(newStore,store))
renderApp(store);
dispatch({  type:'BODY_TEXT',text:'修改后的body'  })
// renderApp(store);  //性能开销太大  需要mvvm