import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import AdminSignInPageForm from '../../../components/SignupForm/AdminSignInPageForm'
import BuyerSigninImage from './BuyerSigninFormCompo/BuyerSigninImage'



const BuyerSigninForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform'>
        <div className='signin-image-and-form '>
          <BuyerSigninImage />
          <AdminSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BuyerSigninForm