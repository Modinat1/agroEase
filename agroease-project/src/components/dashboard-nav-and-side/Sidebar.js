import React from 'react'
import "./Sidebar.css"
import AgroEaseLogo from '../../images/agrologo.png'

export default function Sidebar() {
  return (
    <>
    <nav>
        <div className="logo-name">
          <div className="logo-name" style={{ height: 60 }}>
             <img src={AgroEaseLogo} alt="AgroEase Logo" id='agroease_logo' /> 
          </div>
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li>
                <i className="uil uil-estate" />
                <span className="link-name">Dahsboard</span>
            </li>
            <li>
                <i className="uil uil-users-alt" />
                <span className="link-name">My Client</span>
            </li>
            <li>
                <i className="uil uil-elipsis-double-v-alt" />
                <span className="link-name">Refferal</span>
            </li>
          </ul>
          <ul className="logout-mode">
            <li>
                <i className="uil uil-signout" />
                <span className="link-name">Logout</span>
            </li>
            {/* <li className="mode">
              <a href="#">
                <i className="uil uil-moon" />
                <span className="link-name">Dark Mode</span>
              </a>
              <div className="mode-toggle">
                <span className="switch" />
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}
