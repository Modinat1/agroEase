import React from 'react'
import GeneralSignupFormInput from '../GeneralFormInput/GeneralSignupFormInputBuyer'
import "./AdminSignInPageForm.css"
import SignInFormFooterBroker from './AdminSignInPageFormCompo/SignInFormFooterBroker'
import SigninText from './AdminSignInPageFormCompo/SigninText'



const AdminSignInPageForm = () => {
  return (
    <div >
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <SignInFormFooterBroker />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default AdminSignInPageForm