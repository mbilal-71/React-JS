
import React from 'react'

const arr =[
    {user: "Ahmed",
        age: 30
    },
    {
        user:"Ali",
        age:25
    },
    {
        user:"Asad",
        age: 28
    }
]

  arr.map(function(elem){
     console.log(elem)
      })

const user = () => {
  return (
    <div className='parent'>
    
    </div>
  )
}

export default user;

