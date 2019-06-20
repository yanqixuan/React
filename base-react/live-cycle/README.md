# 生命周期

React 16.xx 版本之前的生命周期
## 挂载阶段
组件第一次渲染的时候
1. componentWillMount
  将要挂载
2. componentDidMount
  已经挂载

## 更新阶段
- props更新
1. componentWillReceiveProps
2. shouldComponentUpdate(nextProps,nextState)  是否更新 返回 true || false
    判断nextProps,nextState 与旧的数据比较 
    一样就不更新
3. componentWillUpdate
4. componentDidUpdate

- state更新
1. shouldComponentUpdate
2. componentWillUpdate
3. componentDidUpdate

## 卸载阶段
componentWillUnmount
 可以实现清理操作 (定时器，全局的事件绑定)


 ## 更新state
 1. getDerivedStateFromProps
  必须return
  根据返回值{}  更新  return state  不更新则return null
  无论更新还是挂载都会执行

2. getSnapshotBeforeUpdate

3. componentDidUpdate(preProps,preState,a)
    15.xxx a===undefined     16.xxx a===getSnapshotBeforeUpdate()
