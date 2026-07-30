
import React from 'react'

// const arr =[
//     {user: "Ahmed",
//         age: 30
//     },
//     {
//         user:"Ali",
//         age:25
//     },
//     {
//         user:"Asad",
//         age: 28
//     }
// ]

//   arr.map(function(elem){
//      console.log(elem)
//       })

  // const arr = [10,20,30]



  const user = (props) => {
  return (
    <div style={{color:"white"}}>
    <h1>
     {props.name}
     </h1>

    </div>
  )
}

export default user