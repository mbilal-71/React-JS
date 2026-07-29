
import React from 'react'

const arr =[10,20,30,40]

const user = () => {
  return (
    <div className='parent'>
      {arr.map(function(elem){
      return <h1>{elem*2}</h1>
      })}
    </div>
  )
}

export default user

