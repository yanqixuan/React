import React, { useEffect, useState } from 'react'

function EffectHookDemo() {
  const [count, setCount] = useState(0);  //定义state ,默认值为0
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth, //屏幕可见区域宽度
    height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth, //屏幕可见区域宽度
      height: document.documentElement.clientHeight
    })
  }

  // 在 didMount, didUpdate 周期都会执行
  useEffect(() => {
    document.title = count;
  }, [count])
  // 第二个参数空数组，控制 useEffect 执行, 现在只执行一次
  // 只有数组每一项都不变的情况 useEffect 才不会执行
  useEffect(() => {
    console.log(111);
    window.addEventListener('resize', onResize);
    // 对应unMount
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <button onClick={() => {
      setCount(count + 1) //直接使用setState改变state
    }}>
      click: {count},
      size: {size.width}X{size.height}
    </button>
  )
}

export default EffectHookDemo
