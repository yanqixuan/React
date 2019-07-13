function combineReducers (reducers) { //接收一个对象奥
  const reducersKey = Object.keys(reducers);
  let finalReducers = {};
  for ( let i = 0, len = reducersKey.length; i<len; i++) {
    let key = reducersKey[i]
    if(typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducersKeys = Object.keys(finalReducers);
  const nextState = {}
  return function (state = {}, action) {
    // .....return
    for (let j = 0, len = finalReducersKeys.length; j < len;j++){
      const key = finalReducersKeys[j];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey,action);  //拿到它的上一份state,返回新的state
      nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}

export default combineReducers;