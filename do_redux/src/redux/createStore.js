
export const createStore = (state,storeChange) => {
  const listeners = []; //使用了状态的组件都会在这里
  const store = state || {};
  
  // 订阅发布
  // listen callback
  const subscribe = (listen) => listeners.push(listen);

  // const dispatch = (action) => storeChange(store,action);
  const dispatch = (action) => {
    const newStore = storeChange(store,action);
    // 每个组件更新 store
    listeners.forEach(item => {
      item(newStore,store);
    })
  }

  return { store, dispatch, subscribe };
}