import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import "./FarmerSigninForm.css"
import FarmerSigninImage from './FarmerSigninFormCompo/FarmerSigninImage'
import FarmerSignInPageForm from './FarmerSigninFormCompo/FarmerSignInPageForm'



const FarmerSigninForm = () => {
  return (
    <div >
        <Navbar1 />
        <div className='bg-signinform farmer-height'>
        <div className='signin-image-and-form2 '>
          <FarmerSigninImage />
          <FarmerSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default FarmerSigninForm