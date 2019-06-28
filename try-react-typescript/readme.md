yarn add webpack webpack-cli webpack-dev-server -D
yarn add react react-dom
yarn add @types/react @types/react-dom -D
yarn add babel-core babel-cli babel-preset-env -D
yarn add typescript -D
配置webpack.config.js
yarn add html-webpack-plugin awesome-typescript-loader -D
.babelrc
tsconfig.json

# typescript
  将js弱类型变成强类型，需要有类型声明文件，@types/react
  typescript 是js的超集,js是在ts里可以完全运行的,跟java一样,静态类型语音,运行前需要先编译。
  - 强制类型声明
  
## webpack-dev-server 不会刷新浏览器
    webpack-dev-server --inline   会刷新浏览器
    webpack-dev-server --inline --hot    刷新浏览器需要更新的局部  热更新

## webpack 分离打包
    entry:vendor
    vendorStyles