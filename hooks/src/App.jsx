import React, { useState } from 'react'

import { useEffect } from "react"

const App = () => {
  // const [num, setNum] = useState(0)

  // const increaseNum = () => {
  //   setNum(num + 1)

  // }
  // const decreaseNum = () => {
  //   setNum(num - 1)

  // }


  // const [num, setNum] = useState({ user: 'Ahmed', age: 20 })
  // const btnClicked = () => {
  //   const newNum = { ...num };
  //   newNum.user = 'Ali'
  //   setNum(newNum)
  // }

  // const [num, setNum] = useState([10, 20, 30])
  // const btnClicked = () => {
  //   // const newNum = [...num];
  //   // newNum.push(99)
  //   // setNum(newNum)
  //   setNum(prev => [
  //     ...prev, 50
  //   ]
  //   )
  // }

  // const [num, setNum] = useState(10)
  // const btnClicked = () => {
  //   setNum(prev => (prev + 1))
  //   setNum(prev => (prev + 1))
  //   setNum(prev => (prev + 1))
  // }

  //USE EFFECT:

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)
  useEffect(function () {
    console.log('Use effect is running')
  }, [num])

  return (
    <div>
      {/* <h1>{num}  </h1>
      <button onClick={btnClicked}>Click</button> */}
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}
        onDoubleClick={() => {
          setNum2(num2 + 10)
        }}
      >Click
      </button>

    </div >
  )





}

export default App
