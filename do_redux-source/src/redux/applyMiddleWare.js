function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


export default function (...middleWares) { //可以收到很多个中间件
  return (createStore) => (...arg) => {
    const store = createStore(...arg);

    // 表示不允许执行dispatch的规范
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
        'Other middleware would not be applied to this dispatch.'
      )
    }
    // 每个中间件的方法
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // 循环所有中间件 把API对象传个每个中间件
    // [log(middlewareAPI), thunk(middlewareAPI)]
    // [next => action => {}, next => action => {}]
    // chain数组存储的是所有中间件执行后返回的结果  
    const chain = middleWares.map(middleware => middleware(middlewareAPI))
    // compose 上一个函数的返回值会是下一个函数的入参
    // mul10(add5())
    const composeRes = compose(...chain);
    /**
     * logger:
     * next 是上一个函数的返回值
      const logger = ({ dispatch, getState }) =>
        next => action => {
        console.log('[logger]即将执行:', action);
        const res = next(action);
        console.log('[logger]执行完毕', res)
        return res;
      }
     */

    dispatch = composeRes(store.dispatch);
    // 覆盖原来的
    return {
      ...store,
      dispatch
    }
  }
}