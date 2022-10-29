import React from 'react'
import "./NavbarCompo.css"
import {BsSearch} from "react-icons/bs"

const Navbar2SearchInput = () => {
  return (
    <div>
        <div className='navbar1-search-input'>
            <input type="text" />
            <BsSearch className='navbar-search-icon'/>
        </div>
    </div>
  )
}

export default Navbar2SearchInput