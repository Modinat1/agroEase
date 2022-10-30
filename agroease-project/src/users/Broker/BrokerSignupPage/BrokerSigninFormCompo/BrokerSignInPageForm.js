import React from 'react'
import CreateAccountBotton from '../../../../components/Button/CreateAccountBotton'
import GeneralSignupFormInput from '../../../../components/GeneralFormInput/GeneralSignupFormInput'
import SignInFormFooter from '../../../../components/SignupForm/AdminSignInPageFormCompo/SignInFormFooter'
import SigninText from '../../../../components/SignupForm/AdminSignInPageFormCompo/SigninText'


const BrokerSignInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <CreateAccountBotton />
                <SignInFormFooter/>
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default BrokerSignInPageForm