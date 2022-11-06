import React from 'react'
import LogInAccountButtonFarmer from '../../../../components/Button/LogInAccountButtonFarmer'
import GeneralLoginFormFarmer from '../../../../components/GeneralFormInput/GeneralLoginFormFarmer'
import "../../../../components/LoginForm/AdminLogInPageForm.css"
import LogInFormFooterFarmer from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInFormFooterFarmer'
import LogInText from '../../../../components/LoginForm/AdminLogInPageFormCompo/LogInText'


const FarmerLogInPageForm = () => {
  return (
    <div>
        <div className='admin-signup-cover'>
            <div className='admin-login-form-inner'>
                <LogInText />
                <GeneralLoginFormFarmer />
                <LogInAccountButtonFarmer />
                <LogInFormFooterFarmer />
            </div>
            <div className='admin-login-form-outer'></div>
        </div>
    </div>
  )
}

export default FarmerLogInPageForm