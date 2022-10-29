import React from 'react'
import AdminLogInPageForm from '../../../components/LoginForm/AdminLogInPageForm'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import BuyerLoginImage from './BuyerLoginFormCompo/BuyerLoginImage'


const BuyerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform '>
            <div className='signin-image-and-form '>
                <BuyerLoginImage />
                <AdminLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default BuyerLoginForm