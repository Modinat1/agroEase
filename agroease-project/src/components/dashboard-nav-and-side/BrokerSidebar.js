import React from 'react'
import "./Sidebar.css"
import AgroEaseLogo from '../../images/agrologo.png'
import { Link } from 'react-router-dom'

export default function BrokerSidebar() {
  return (
    <>
    <nav className='dashboard-sidebar'>
        <div className="logo-name">
          <div className="logo-name" style={{ height: 60 }}>
             <img src={AgroEaseLogo} alt="AgroEase Logo" id='agroease_logo' /> 
          </div>
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li className='flex'>
                <i className="uil uil-estate pt-3 pr-2" />
                <Link to='/brokerdashboard'><span className="link-name cursor-pointer">Dahsboard</span></Link>
            </li>
            <li className='flex'>
                <i className="uil uil-users-alt pt-4 pr-2" />
                <Link to='/brokerprofilepage'><span className="link-name cursor-pointer">Profile</span></Link>
            </li>
            <li className='flex'>
                <i className="uil uil-users-alt pt-4 pr-2" />
                <Link to='/brokerclientpage'><span className="link-name cursor-pointer">My Client</span></Link>
            </li>
            <li className='flex'>
                <i className="uil uil-elipsis-double-v-alt pt-4 pr-2" />
                <Link to='/brokerrefferalpage'><span className="link-name cursor-pointer">Refferal</span></Link>
            </li>
          </ul>
          <ul className="logout-mode">
            <li className='flex'>
                <i className="uil uil-signout pt-4 pr-2" />
                <Link to='/'><span className="link-name">Logout</span></Link>
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
