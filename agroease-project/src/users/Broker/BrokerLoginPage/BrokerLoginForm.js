import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import BrokerLogIImage from './BrokerLoginFormCompo/BrokerLogIImage'
import BrokerLogInPageForm from './BrokerLoginFormCompo/BrokerLogInPageForm'


const BrokerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform '>
            <div className='signin-image-and-form '>
                <BrokerLogIImage />
                <BrokerLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default BrokerLoginForm