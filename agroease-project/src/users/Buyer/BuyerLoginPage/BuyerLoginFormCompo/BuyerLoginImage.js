import React from 'react'
import blackgirl from "../../../../images/blackgirl.png"
import WelcomeBack from '../../../Admin/AdminLoginPage/AdminLoginPageCompo/WelcomeBack'


const BuyerLoginImage = () => {
  return (
    <div>
        <div className='blackgirl-image-text'>
        <div className='mt-10'>
            <img src={blackgirl} alt=""/>
        </div>
        <WelcomeBack />
    </div>
    </div>
  )
}

export default BuyerLoginImage