import React from 'react'
import "../../../Admin/AdminSignupPage/AdminSigninPage.css"
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterFarmer from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterFarmer'
import GeneralSignupFormInputFarmer from '../../../../components/GeneralFormInput/GeneralSignupFormInputFarmer'



const FarmerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInputFarmer />
                <SignInFormFooterFarmer />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default FarmerSignInPageForm