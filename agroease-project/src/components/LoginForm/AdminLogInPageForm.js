import React from 'react'
import LogInAccountButton from '../Button/LogInAccountButton'
import GeneralLoginForm from '../GeneralFormInput/GeneralLoginForm'
import LogInFormFooter from './AdminLogInPageFormCompo/LogInFormFooter'
import LogInText from './AdminLogInPageFormCompo/LogInText'


const AdminLogInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-signup-form-inner'>
                <LogInText />
                <GeneralLoginForm />
                <LogInAccountButton />
                <LogInFormFooter />
            </div>
            <div className='admin-signup-form-outer'></div>
        </div>
    </div>
  )
}

export default AdminLogInPageForm