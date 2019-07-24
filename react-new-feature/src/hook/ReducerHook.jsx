import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      // return state;
      throw new Error('type error')
  }
}

function Index() {
  const [state, dispatch] = useReducer(reducer, 0) //第二个参数为默认值
  return (
    <div>
      state: {state},
      <button onClick={() => {
        dispatch({type: 'INCREMENT'})
      }}>INCREMENT</button>
    </div>
  )
}

export default Index
