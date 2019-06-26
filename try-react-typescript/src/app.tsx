import * as React from 'react';
import { Header,About } from './components';

// App 是常量也是组件,约束了App的类型
export const App:React.StatelessComponent<{}> = ()=>{
  return (
    <div>
      <Header/>
      <About/>
    </div>
  )
}