
export const createStore = (reducer,preloadedState) => {
  const listeners = []; //使用了状态的组件都会在这里
  let store = preloadedState; //默认值
  // 订阅发布
  // listen callback
  const subscribe = (listen) => listeners.push(listen);
  // const dispatch = (action) => storeChange(store,action);
  const dispatch = (action) => {
    store = reducer(store,action);
    // 每个组件更新 store
    listeners.forEach(item => {
      item();
    })
  }

  const getState = () => {
    return store;
  }
  dispatch({ type:'@@redux/INIT' })//初始化数据
  return { 
    store, 
    dispatch, 
    subscribe,
    getState
  };
}

export default createStore;