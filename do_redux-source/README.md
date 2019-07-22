- combineReducers
  返回一个reducers,把所有组合起来的reducer都执行一次。

- 中间件  redux-thunk applyMiddleware
  cnpm i redux-thunk
  中间件格式：({ dispatch, getState }) =>{}
  如果要激活中间件，放入createStore的第二个参数 createStore(index, applyMiddleware(ReduxThunk))
  createStore接收三个参数，reducer, preloadedState, enhancer
  当createStore只传入两个参数，如果第二个参数是方法applyMiddleware(ReduxThunk),则赋值给enhancer,preloadedState为undefined

  applyMiddleware方法，接收参数为所有中间件

- compose方法
  把每个function的功能组合起来，function执行顺序跟其中ab顺序有关，b(a())
