import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import BuyerLoginImage from './BuyerLoginFormCompo/BuyerLoginImage'
import BuyerLogInPageForm from './BuyerLoginFormCompo/BuyerLogInPageForm'



const BuyerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform '>
            <div className='signin-image-and-form '>
                <BuyerLoginImage />
                <BuyerLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default BuyerLoginForm