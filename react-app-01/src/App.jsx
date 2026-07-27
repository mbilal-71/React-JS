import Card from "./components/card";
import Navbar from "./components/navbar";
import React from 'react'

const App = () => {
  return (
    <>
    <div className="parent">
    <Card user= "React Native" age={19} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtonLFQ9AKmsEhe2MmmGBRTiHK5NzD4aDoTVJRztNnrg&s=10"/>
    <Card user= "Java Script" age={19} img ="https://static.vecteezy.com/system/resources/thumbnails/001/416/690/small/js-emblem-orange-shield-and-white-text-vector.jpg"/>
    <Card user= "Tailwind CSS" age={19} img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsVb73HcMBgQreVbxThJeYWz-Zy643vEbTkJcnbkp6g&s=10"/>
    </div>

    </>
  )
}

export default App