import React from 'react'
import "../../../Admin/AdminSignupPage/AdminSigninPage.css"
import CreateAccountBotton from '../../../../components/Button/CreateAccountBotton'
import GeneralSignupFormInput from '../../../../components/GeneralFormInput/GeneralSignupFormInput'
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterBroker from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterBroker'


const BrokerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <CreateAccountBotton />
                <SignInFormFooterBroker />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default BrokerSignInPageForm