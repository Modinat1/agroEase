import React, { useEffect } from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import './UsersSignIn.css'
import { UserSignUpImage } from '../UsersSignUp/UserSignUpImage/UserSignUpImage'
import { UsersSignInForm } from './UsersSignInForm/UsersSignInForm'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Context/axios-config/axios-user-config'
import axios from 'axios'


export const UsersSignIn = () => {

  const navigate = useNavigate();
	// const {accessToken} = userAuth

  
  const isLoggedIn = localStorage.getItem("token")
	// const config = {
	// 	headers: { Authorization: `Bearer ${accessToken}` },
	// };
  

//   

  useEffect(() => {
    
    if (isLoggedIn) {
      navigate("/farmerdashboardpage")
      
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
