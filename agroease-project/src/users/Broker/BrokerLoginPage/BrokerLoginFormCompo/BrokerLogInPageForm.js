import React from 'react'
import "../../../../components/LoginForm/AdminLogInPageForm.css"
import GeneralLoginFormBroker from '../../../../components/GeneralFormInput/GeneralLoginFormBroker'
import LogInFormFooterBroker from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInFormFooterBroker'
import LogInText from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInText'



const BrokerLogInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-login-form-inner'>
                <LogInText />
                <GeneralLoginFormBroker />
                <LogInFormFooterBroker />
            </div>
            <div className='admin-login-form-outer'></div>
        </div>
    </div>
  )
}

export default BrokerLogInPageForm