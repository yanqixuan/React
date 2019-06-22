import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux' //引入createStore
import countReducer from './reducer'
import './index.css';
import App from './App';
import Counter from './Counter'
import * as serviceWorker from './serviceWorker';

let store = createStore(countReducer) //创建出整个应用的数据
ReactDOM.render(<App />, document.getElementById('root'));
const renderCount = () => {
  ReactDOM.render(<Counter value={store.getState()}
    onIncrement={() => {
      store.dispatch({ type: 'INCREMENT' })  //描述要做的事
    }}
    onDecrement={() => {
      store.dispatch({ type: 'DECREMENT' })
    }} />, document.getElementById('redux'))
}
renderCount()
store.subscribe(() => {
  console.log(store.getState())
  renderCount()
})
serviceWorker.unregister();
