import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='h-screen bg-black text-white' >
      <Navbar />
      <Footer />
      <Home />
    </div>
  )
}

export default App
