import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-cyan-700 h-15 px-5 py-4 font-bold text-lg'>
            <h2 className='text-xl'>Devsinc</h2>
            <div className='flex gap-8'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
