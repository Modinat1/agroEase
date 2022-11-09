import React from 'react'
import "../../../Admin/AdminSignupPage/AdminSigninPage.css"
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterBuyer from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterBuyer'
import GeneralSignupFormInputBuyer from '../../../../components/GeneralFormInput/GeneralSignupFormInputBuyer'



const BuyerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInputBuyer />
                <SignInFormFooterBuyer />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default BuyerSignInPageForm