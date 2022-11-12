import React from 'react'
import "./AdminLogInPageForm.css"
import LogInFormFooterBuyer from './AdminLogInPageFormCompo/LogInFormFooterBuyer'
import LogInText from './AdminLogInPageFormCompo/LogInText'
import GeneralLoginFormBuyer from '../GeneralFormInput/GeneralLoginFormBuyer'
import LogInAccountButtonBuyer from '../Button/LogInAccountButtonBuyer'


const AdminLogInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-login-form-inner'>
                <LogInText />
                <GeneralLoginFormBuyer />
                <LogInAccountButtonBuyer />
                <LogInFormFooterBuyer />
            </div>
            <div className='admin-login-form-outer'></div>
        </div>
    </div>
  )
}

export default AdminLogInPageForm