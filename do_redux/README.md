- 组件状态，兄弟，父子，多余代码。
  大型项目，多组件，多个跨路由的组件，需要共享状态。

- 状态管理。
  协同。 dispatch(action(type:'',args)) -> reducer(无差别的状态计算 switch case ) -> state

1. head body 两个函数组件，共享了单一的全局状态树。
2. 状态全局，可以被随意的修改。
3. dispatch 使状态的修改可预期，任何改变都可以在dispatch中找到源头 {type:'',args}
4. 状态修改后需要通知发生了状态改变，old state -> new state,需要使用新的状态   订阅发布者模式 subscribe