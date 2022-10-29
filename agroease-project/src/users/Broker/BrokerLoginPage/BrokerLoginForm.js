import React from 'react'
import AdminLogInPageForm from '../../../components/LoginForm/AdminLogInPageForm'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import BrokerLogIImage from './BrokerLoginFormCompo/BrokerLogIImage'


const BrokerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform '>
            <div className='signin-image-and-form '>
                <BrokerLogIImage />
                <AdminLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default BrokerLoginForm