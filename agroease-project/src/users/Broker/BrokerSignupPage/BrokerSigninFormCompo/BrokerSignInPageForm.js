import React from 'react'
import "../../../Admin/AdminSignupPage/AdminSigninPage.css"
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'
import SignInFormFooterBroker from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooterBroker'
import GeneralSignupFormInputBroker from '../../../../components/GeneralFormInput/GeneralSignupFormInputBroker'



const BrokerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInputBroker />
                <SignInFormFooterBroker />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default BrokerSignInPageForm