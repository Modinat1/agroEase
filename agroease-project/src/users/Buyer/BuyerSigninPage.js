import React from 'react'
import "../Admin/AdminSignupPage/AdminSigninPage.css"
// import Navbar1 from '../../components/Navbar1/Navbar1'
import BrokerSignInPageForm from '../Broker/BrokerSignupPage/BrokerSigninFormCompo/BrokerSignInPageForm'
// import BuyerSigninImage from './BuyerSignupPage/BuyerSigninFormCompo/BuyerSigninImage'



const BuyerSigninPage = () => {
  return (
    <div>
        {/* <Navbar1 /> */}
        <div className='bg-signinform'>
        <div className='signin-image-and-form '>
          {/* <BuyerSigninImage /> */}
          <BrokerSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BuyerSigninPage