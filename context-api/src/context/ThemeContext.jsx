import React, { createContext, useState } from 'react'


export const ThemeDataContext = createContext()


const ThemeContext = (props) => {

  const [theme1, setTheme] = useState('dark')


  return (
    <div>
      <ThemeDataContext.Provider value={[theme1, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
