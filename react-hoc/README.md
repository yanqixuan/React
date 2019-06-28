## hoc
high order component 高阶组件 接受一个组件，返回一个组件
高阶函数 接受一个函数作为参数，返回一个函数

## @
ES7 装饰器 decorator 需要更新babel配置
yarn eject
在package.json  babel中 添加
"plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy" : true }]
    ],
重新启动

## Mobx
  cnpm i mobx mobx-react -S
  - observable
  - action
  响应式调用的表达式
  - computed  计算值，响应式的产生一个值
  - autorun   应当自动运行，但不会产生一个新的值

## 装饰器
### 装饰者模式
  可以动态的添加 调整功能

  1. 修饰方法
    在descriptor.value中
    return function(target,key,descriptor){
        var callBack = descriptor.value;
        var fn = debounce(callBack,wait); //进行增强
        // 修饰方法时改变的是value属性
        descriptor.value = fn;//返回增强后的 
      }
  2. 修饰属性
      修饰箭头函数时，箭头函数是一个属性。
      在descriptor.initializer && descriptor.initializer();中