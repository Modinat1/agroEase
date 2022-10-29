import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import "./NavbarCompo.css"
import {navItems} from "./NavbarListModal"

const Navbar1MenuList = () => {

  const [dropDowns, setDropDowns] = useState(false)
  return (
    <div>
        <ul className='navbar-menulist'>
           {
            navItems.map((item) => {

              if (item.title === "Account") {
                return (
                  <li key={item.id} onMouseEnter={()=> setDropDowns(true)} onMouseLeave={()=> setDropDowns(false)}>
                    <Link to={item.path} >{item.title}</Link>
                    {dropDowns && <DropDown />}
                  </li>
                )
                
              }
              return (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
              )
            })
           }
        </ul>
        
    </div>
  )
}

export default Navbar1MenuList