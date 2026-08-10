
import { Link } from 'react-router-dom'

const Navbar = (props) => {


    return (
        <div className='nav'>
            <div className='tags'>
                <button onClick={() => {
                    props.setTheme('Light')
                }}>
                    Change Theme
                </button>
            </div>
        </div>
    )
}

export default Navbar
