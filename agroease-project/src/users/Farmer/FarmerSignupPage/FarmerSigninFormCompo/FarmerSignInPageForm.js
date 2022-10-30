import React from 'react'
import "../../../Admin/AdminSignupPage/"
import CreateAccountBotton from '../../../../components/Button/CreateAccountBotton'
import GeneralSignupFormInput from '../../../../components/GeneralFormInput/GeneralSignupFormInput'
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterFarmer from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterFarmer'


const FarmerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <CreateAccountBotton />
                <SignInFormFooterFarmer />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default FarmerSignInPageForm