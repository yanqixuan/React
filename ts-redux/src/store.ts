import { Store,createStore } from 'redux';
import { State,state } from './reducers';

export const store:Store<State> = createStore(  //约束 state 为 State类型
  state
)