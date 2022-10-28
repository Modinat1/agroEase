import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarCompo.css"

const Navbar1MenuList = () => {
  return (
    <div>
        <ul className='navbar-menulist'>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/help"><li>Help</li></Link>
            <Link to="/account"><li>Account</li></Link>
        </ul>
    </div>
  )
}

export default Navbar1MenuList