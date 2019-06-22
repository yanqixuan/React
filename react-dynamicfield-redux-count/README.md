# React状态管理
  1. redux

  应用的状态放在全局的位置
  var a = 1
  定制了一套更改数据的流程 
  import { createStore } from 'redux' //引入createStore
  import countReducer from './reducer'
  let store = createStore(countReducer) //创建出整个应用的数据
  store.getState()
  store.dispatch({ type: 'INCREMENT' })  //描述要做的事
  store.subscribe(() => {
    console.log(store.getState())
    renderCount()
  })

## action
  是一个对象  js {} 
  描述干什么 type:'INCREMENT'
  传递数据

## Reducer 函数
  更新 store 

## store 存数据的地方