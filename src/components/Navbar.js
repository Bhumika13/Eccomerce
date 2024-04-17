import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaBars, FaTimes ,FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.svg'

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (
        <div className='header fixed shadow-lg w-full h-[55px] z-50 top-0 px-4 bg-[#0a192f] text-gray-300'>
            <nav className='flex justify-between items-center'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' style={{ width: '50px' }} />
                </a>
                <div className='hamburger lg:hidden z-20' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to={'/checkout'} smooth={true} duration={500} onClick={closeMenu} className='flex justify-center items-center'> <FaShoppingCart /><span className='ml-1 align-middle'>{cartItems.length}</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="login" smooth={true} duration={500} onClick={closeMenu}>Logout</Link>
                    </li>
                </ul>

            </nav>

        </div>
    )
}

export default Navbar
