import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('Dark')
  return (
    <div>
      <h2>Theme is {theme}</h2>
      <Navbar theme={theme} setTheme={setTheme} />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </div>
  )
}

export default App
