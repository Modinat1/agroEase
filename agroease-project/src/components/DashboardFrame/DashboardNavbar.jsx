import React from "react"

import "./Dashboard2.css"

export const DasboardNavbar = () =>{
  return(
   <>
   {/* this is where is the top bar with green backgound begins */}
<div className="top">
  <i className="uil uil-bars sidebar-toggle" />
  <div className="search-box ">
    <h1 className="greet">Hello, Godswill</h1>
    <p style={{color: '#FFFFFF'}} className="nav-date">Today Is Thursday, 22 September, 2022</p>
  </div>
  <div className="search-box">
    <i className="uil uil-search" />
    <input type="text" placeholder="Search here..." />
  </div>
  <a href>
    <div className="notification">
      <i className="uil uil-bell" id="noti-bell" />
      <span className="badge" />
    </div>
  </a>
  <img src="/assets/godswill.png" alt />
  {/* This is where the top bar with green backgound  ends */}    
</div>
</>
  )
}