import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = ({ children, theme }) => {
    const data = useContext(ThemeDataContext)
    const [theme1] = useContext(ThemeDataContext)

    return (
        <div className={theme1}>
            <h2>
                Devsinc
            </h2>
            <h2>{children}</h2>
            <Nav2 theme={theme} />
        </div>
    )
}

export default Navbar
