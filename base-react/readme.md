# React 入门

1. cnpm i create-react-app -g  安装脚手架
2. create-react-app helloreact 建立模板文件

## 组件
App.js
Child.js

### 子组件
子组件的方法 如果是普通函数 this会丢失，绑定不到。 使用bind（this) 绑定
使用箭头函数不会丢失

## render
组件需要渲染的页面

## jsx
jsx 是一个js的语法拓展
react 自己的语法  js+html

## state
组件内部的数据

## props
外部传入的数据
在父组件引入子组件  传入msg 子组件直接使用
被父组件包裹的html 会在props.children中

## {}
表示其中内容需要运算

## ref
获取dom结构
1. ref="stringRef"
    this.refs.stringRef.innerHTML = 'new String Ref'
    
2. ref={(ref)=> this.methodRef = ref} 
    this.methodRef 获取到了当前节点
    this.methodRef.innerHTML = 'new method Ref'

3. ref={this.objRef}    ！！！
    把ref挂在 this.objRef.current 属性上

    constructor(){
    super();  //继承原组件的属性
    this.objRef = React.createRef();
    }

    this.objRef.current.innerHTML = 'new Object ref'

## Context 跨层级传递属性
### 15版本
  父组件  state  使所有组件一个颜色需要层层传递
  {
    theme:'red'
  }

  使用Context 可以实现跨组件传递
  getChildContext(){ return {color:'purple'} }  //提供一份context数据
  Context.childContextTypes = {   //声明context属性的类型
    color:propTypes.string
  }

  子组件引用时,也需要指定引入的context数据的类型
  MyButton.contextTypes = {
    color:propTypes.string
  }
  需要安装并引入  cnpm i prop-types -S

  - 15版本的问题: 跨层级传递的时候，假如中间某一组件 shouldComponentUpdate return false 
    导致后代不会更新 context 的数据


### 16版本 Context
    const ThemContext = React.createContext({
      theme:'purple'
    })
  - 父组件提供数据(生产者)
      return (
        <ThemContext.Provider value={this.state}>
        </ThemContext.Provider>
      )
  - 子组件获取数据(消费者)
      <ThemContext.Consumer>
          {
            (value)=>{
              return (
                <button style={{ backgroundColor: value.theme }}>
                </button>
              )
            }
          }
      </ThemContext.Consumer>

  静态属性state无法获取实例的this
