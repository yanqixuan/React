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