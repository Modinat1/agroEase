import React from 'react'
import CreateAccountBotton from '../Button/CreateAccountBotton'
import GeneralSignupFormInput from '../GeneralFormInput/GeneralSignupFormInput'
import "./AdminSignInPageForm.css"
import SignInFormFooter from './AdminSignInPageFormCompo/SignInFormFooter'
import SigninText from './AdminSignInPageFormCompo/SigninText'


const AdminSignInPageForm = () => {
  return (
    <div >
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <SigninText />
                <GeneralSignupFormInput />
                <CreateAccountBotton />
                <SignInFormFooter />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default AdminSignInPageForm