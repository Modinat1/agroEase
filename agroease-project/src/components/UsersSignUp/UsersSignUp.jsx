import React from 'react'
import './UsersSignUp.css'

import Navbar1 from '../Navbar1/Navbar1'
import { UserSignUpImage } from './UserSignUpImage/UserSignUpImage'
import { UsersSignUpForm } from './UsersSignUpForm/UsersSignUpForm'

export const UsersSignUp = () => {
  return (
    <>
    <Navbar1/>
    <div className='broker_signup_container'>
    <UserSignUpImage/>
    <UsersSignUpForm/>
    </div>
    </>
  )
}
