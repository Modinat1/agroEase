import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import BrokerSigninImage from './BrokerSigninFormCompo/BrokerSigninImage'
import BrokerSignInPageForm from './BrokerSigninFormCompo/BrokerSignInPageForm'


const BrokerSigninForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform'>
        <div className='signin-image-and-form'>
          <BrokerSigninImage />
          <BrokerSignInPageForm />
        </div>
      </div>
    </div>
  )
}

export default BrokerSigninForm