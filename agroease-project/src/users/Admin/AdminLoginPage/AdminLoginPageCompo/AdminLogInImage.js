import React from 'react'
import admin from "../../../../images/admin.png"
import WelcomeBack from './WelcomeBack'
import "./AdminSignLogPage.css"

const AdminLogInImage = () => {
  return (
    <div className='farmer-image-text'>
        <WelcomeBack />
        <div className='mt-10'>
            <img src={admin} alt=""/>
        </div>
    </div>
  )
}

export default AdminLogInImage