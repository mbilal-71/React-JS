import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <div className='flex justify-center gap-5 py-4 font-bold text-lg'>
                <Link to='/products/mens' >Mens</Link>
                <Link to='/products/womens' >Womens</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default Products
