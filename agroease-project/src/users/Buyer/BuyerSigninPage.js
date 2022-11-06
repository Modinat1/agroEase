import React from 'react'
import Navbar1 from '../../components/Navbar1/Navbar1'
import "../Admin/AdminSignupPage/AdminSigninPage.css"
import BuyerSigninImage from './BuyerSignupPage/BuyerSigninFormCompo/BuyerSigninImage'
import BuyerSignInPageForm from './BuyerSignupPage/BuyerSigninFormCompo/BuyerSignInPageForm'



const BuyerSigninPage = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform'>
        <div className='signin-image-and-form '>
          <BuyerSigninImage />
          <BuyerSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BuyerSigninPage