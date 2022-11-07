import React from 'react'
import GeneralLoginFormBuyer from '../../../../components/GeneralFormInput/GeneralLoginFormBuyer'
import LogInFormFooterBuyer from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInFormFooterBuyer'
import LogInText from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInText'

const BuyerLogInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-login-form-inner'>
                <LogInText />
                <GeneralLoginFormBuyer />
                <LogInFormFooterBuyer />
            </div>
            <div className='admin-login-form-outer'></div>
        </div>
    </div>
  )
}

export default BuyerLogInPageForm