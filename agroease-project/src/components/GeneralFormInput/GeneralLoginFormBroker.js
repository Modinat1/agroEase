import React from 'react'
import "./GeneralSignupFormInput.css";

const GeneralLoginFormBroker = () => {
  return (
    <div>
        <form>
            <div className='flex-col'>
                <label>Email</label>
                <input type="email"/>
            </div>
            <div className='flex-col'>
                <label>Password</label>
                <input type="password"/>
            </div>
        </form>
    </div>
  )
}

export default GeneralLoginFormBroker