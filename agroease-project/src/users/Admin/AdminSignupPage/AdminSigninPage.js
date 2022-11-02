import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import AdminSignInPageForm from '../../../components/SignupForm/AdminSignInPageForm'
import "./AdminSigninPage.css"
import AdminSigninImage from './AdminSigninPageCompo/AdminSigninImage'


const AdminSigninPage = () => {
  return (
    <div>
      <Navbar1 />
      <div className='bg-signinform farmer-height'>
        <div className='signin-image-and-form2 '>
          <AdminSigninImage />
          <AdminSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default AdminSigninPage