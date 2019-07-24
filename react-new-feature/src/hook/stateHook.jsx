import React, { useState } from 'react'

function Count() {  //用function定义一个组件，此组件内部无状态，使用hook来添加状态
  const [ count, setCount ] = useState(0);  //数组解构  state是值，setState是设置值的函数
  return (
    <div>
      count: { count }
      <button onClick={() => {
        setCount(count + 1);
      }}> + </button>
    </div>
  )
}

export default Count;
