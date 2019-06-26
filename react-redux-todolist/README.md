# react-redux
  cnpm i redux -S  做数据管理
  cnpm i react-redux -S 将数据与组件结合起来

## 提供数据
  在index.js中
  用 Provider 包裹 App 组件，并传入总体的store
  在子组件中 使用connect 传入 state,dispatch 到子组件的props中