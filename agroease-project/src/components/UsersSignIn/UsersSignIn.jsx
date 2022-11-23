import React from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import './UsersSignIn.css'
import { UserSignUpImage } from '../UsersSignUp/UserSignUpImage/UserSignUpImage'
import { UsersSignInForm } from './UsersSignInForm/UsersSignInForm'


export const UsersSignIn = () => {
  return (
    <React.Fragment>
    <Navbar1/>

    <div className="userSignIn_container">
    <UserSignUpImage/>
    <UsersSignInForm/>
    </div>
    </React.Fragment>
  )
}
