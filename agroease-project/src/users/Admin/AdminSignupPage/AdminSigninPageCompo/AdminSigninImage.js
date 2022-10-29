import React from 'react'
import "./AdminSigninImage.css"
import admin from "../../../../images/admin.png"

const AdminSigninImage = () => {
  return (
        <div className='farmer-image-text'>
            <h1 className="text-2xl font-medium text-left">Signup as an Admin</h1>
            <div className='mt-10'>
                <img src={admin} alt=""/>
            </div>
        </div>
  )
}

export default AdminSigninImage