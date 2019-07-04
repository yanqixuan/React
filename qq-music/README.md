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