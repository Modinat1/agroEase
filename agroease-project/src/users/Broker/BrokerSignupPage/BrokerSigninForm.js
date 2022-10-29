import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import AdminSignInPageForm from '../../../components/SignupForm/AdminSignInPageForm'
import BrokerSigninImage from './BrokerSigninFormCompo/BrokerSigninImage'


const BrokerSigninForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform'>
        <div className='signin-image-and-form'>
          <BrokerSigninImage />
          <AdminSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BrokerSigninForm