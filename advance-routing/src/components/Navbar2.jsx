import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    const navigate = useNavigate()
    const btnClicked = () => {
        navigate('/')
    }
    return (
        <div className='px-5 py-2 h-18 bg-cyan-900 flex items-center'>
            <button onClick={btnClicked} className='bg-amber-500 cursor-pointer active:scale-95 p-3 rounded-full m-4 font-medium'>Return to Home Page</button>
            <button onClick={() => {
                navigate(-1)
            }} className='bg-amber-500 cursor-pointer active:scale-95 p-3 rounded-full m-4 font-medium'>Back</button>
            <button onClick={() => {
                navigate(+1)
            }} className='bg-amber-500 cursor-pointer active:scale-95 p-3 rounded-full m-4 font-medium'>Next</button>
        </div>
    )
}

export default Navbar2
