yarn eject
cnpm i react-router-dom
cnpm i stylus stylus-loader -D
cnpm i jsonp
cnpm i swiper
cnpm i better-scroll -S
cnpm i react-lazyload -S
cnpm i react-transition-group -S 动画库
## react-router-dom
Switch 只显示符合 path 的第一个组件
不加 Switch 符合 path 的所有组件

https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038596624&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&jsonpCallback=callback

## setState
1. 异步的
2. 合并起来

## jsonp 
const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'  
}
?jsonpCallbacck=xxx
xxx 可以固定死的
jsonp jquery
每次请求的 callback xxx 都是不一样的 加上 随机值 
每次不一样，就可以指定前缀
prefix 就是返回函数的前缀
callback_1
callback_2
callback_3

## Lazyload
监听原生的滚动
css3 transfrom 

## Album
components 下的album 跟redux无直接关系
containers 下的album.jsx 使用redux，在跟album连接

## CSSTransition
in,timeout,classNames,unmountOnExit.
classNames 自动匹配类名 xxx-enter xxx-enter-active xxx-enter-done xxx-exit xxx-exit-active xxx-exit-done

## Redux

### 工作流程:根据已有的reducer创建store，store使用dispatch发起action，reducer根据action返回一个新对象更新state

dispatch是store的方法，dispatch调用action，reducer根据action更新state
store是将他们联系到一起的对象

- store 根据已有的reducer创建store，store使用dispatch发起action，reducer根据action返回一个新对象更新state

- action 本质上是一个对象，这里使用的是action创建函数，返回一个对象。 action内必须使用是一个type字段表示将要执行的动作。
  Redux中只需要把创建函数的结果传给dispatch()方法即可发起一次dispatch过程。
  dispatch(actionName(text))
  action只是描述有事情发生，并没有描述如何更新state

- reducer 指定了state的变化如何相应actions并发送到store。
  reducer 是一个纯函数，接受旧的state和action，返回新的state

### connect
connect(mapStateToProps, mapDispatchToProps)(Album)

- mapStateToProps(state)  把state映射到props中去  子组件就可以直接使用this.props.xxx渲染
- mapDispatchToProps(dispatch)  把各种dispatch映射到props中，子组件直接使用this.props.xxx调用dispatch