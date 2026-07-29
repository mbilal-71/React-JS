import React from 'react'
import Card from "./assets/components/card";
import User from "./assets/components/user";

const arr = [10,20,30]

const App = () => {
  return (
    <>
    <div className="parent">
      {/* <Card/>
      <Card/>   */}
    {arr.map(function(elem){
      return <Card/>
    })}
      
    </div>
    
    </>
  )
}

export default App
