import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-cyan-700 h-15 px-5 py-4 font-bold text-lg'>
            <h2 className='text-xl'>FlipCart</h2>
            <div className='flex gap-8'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/products'>Products</Link>
                <Link to='/courses'>Courses</Link>
            </div>
        </div>
    )
}

export default Navbar
