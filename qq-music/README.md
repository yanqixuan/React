yarn eject
cnpm i react-router-dom
cnpm i stylus stylus-loader -D
cnpm i swiper -S

webpack.config.js
{
  test: /\.styl$/,
  use: ["style-loader", "css-loader", "stylus-loader"]
},

## react-router-dom
Switch 只显示符合 path 的第一个组件
不加 Switch 展示符合path的所有组件

## 请求url
https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038591351&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&jsonpCallback=callback

## JSONP
跨域读取数据，同源策略
const OPTION = {
  param:'jsonpCallback',
  prefix:'callback'
}
?jsonpCallback=xxx  xxx是可以固定死的
每次请求的 callback xxx 都是不一样的 加上 随机值

## setState
1. 异步的
2. 合并