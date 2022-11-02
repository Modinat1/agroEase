import React, { useState } from 'react'
import "./DropDown.css"
import {accountDropdown} from "./NavbarListModal"
import {Link} from "react-router-dom"

const DropDown = () => {

    const [dropDown, setDropDown]= useState(false)
  return (
    <div>
        <ul className={dropDown ? "submenu-item clicked" : "submenu-item"}>
            {
                accountDropdown.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropDown(false)}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default DropDown