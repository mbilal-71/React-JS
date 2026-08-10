import React, { useState } from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    const [theme, setTheme] = useState('Dark')

    return (
        <div className='nav'>
            <h2>Theme is {theme}</h2>
            <div className='tags'>
                <button>
                    Change Theme
                </button>
            </div>
        </div>
    )
}

export default Navbar
