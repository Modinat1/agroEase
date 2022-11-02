import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import "../../Admin/AdminSignupPage/AdminSigninPage.css"
import BrokerSignInPageForm from '../../Broker/BrokerSignupPage/BrokerSigninFormCompo/BrokerSignInPageForm'
import BuyerSigninImage from './BuyerSigninFormCompo/BuyerSigninImage'



const BuyerSigninForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform'>
        <div className='signin-image-and-form '>
          <BuyerSigninImage />
          <BrokerSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BuyerSigninForm