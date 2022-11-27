import React from 'react'
import './UserSignUpImage.css'
// import usersSignup from '../../../images/UserSignUpImage.png'
import usersSignUpImg from '../../../images/guy.png'

export const UserSignUpImage = () => {
  return (
    <>
    <div className='broker_signup_img'>
      <img src={usersSignUpImg} alt="" />
    </div>
    </>
  )
}
