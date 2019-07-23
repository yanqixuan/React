## context


## react-redux
- context.js
  把provider,consumer 封装抛出

- Provider.jsx 
  使用context.jsx中的provider  store为调用此Provider时通过createStore创建的store。
  
- connect.jsx
  调用context.jsx中的consumer  接收到Provider中提供的store，
  通过createStore创建的store,有getStore()和dispatch方法，将这两个方法提取出来，作为props传入将要connect的组件。
  此方法返回一个经过了connect的组件。