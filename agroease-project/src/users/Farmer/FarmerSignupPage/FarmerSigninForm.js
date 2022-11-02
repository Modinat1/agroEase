import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import AdminSignInPageForm from '../../../components/SignupForm/AdminSignInPageFormBroker'
import "./FarmerSigninForm.css"
import FarmerSigninImage from './FarmerSigninFormCompo/FarmerSigninImage'


const FarmerSigninForm = () => {
  return (
    <div >
        <Navbar1 />
        <div className='bg-signinform farmer-height'>
        <div className='signin-image-and-form2 '>
          <FarmerSigninImage />
          <AdminSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default FarmerSigninForm