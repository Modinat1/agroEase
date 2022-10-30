import React from 'react'
import "../../../Admin/AdminSignupPage/"
import CreateAccountBotton from '../../../../components/Button/CreateAccountBotton'
import GeneralSignupFormInput from '../../../../components/GeneralFormInput/GeneralSignupFormInput'
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterBuyer from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterBuyer'


const BrokerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <CreateAccountBotton />
                <SignInFormFooterBuyer />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default BrokerSignInPageForm