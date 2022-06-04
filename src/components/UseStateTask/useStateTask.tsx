import React, { useState } from 'react'


export const UseStateTask = () => {

  let [count, setCount] = useState<number>(0)

  const onClickPlus = () => {
    setCount(++count)
  }

  const onClickZero = () => {
    setCount(0)
  }

  const onClickMinus = () => {
    setCount(--count)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickZero}>0</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}
