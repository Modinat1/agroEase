import React, { useEffect } from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import './UsersSignIn.css'
import { UserSignUpImage } from '../UsersSignUp/UserSignUpImage/UserSignUpImage'
import { UsersSignInForm } from './UsersSignInForm/UsersSignInForm'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Context/axios-config/axios-user-config'


export const UsersSignIn = () => {
  

  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem("token")
  


  useEffect(() => {
    
    if (isLoggedIn) {
      return navigate("/adminfarmerallproducts")
    } 
  }, [navigate, isLoggedIn])
  
	


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
