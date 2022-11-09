import React from 'react'
import farmer from "../../../../images/Farm.png"
import WelcomeBack from '../../../Admin/AdminLoginPage/AdminLoginPageCompo/WelcomeBack'

const FarmerLoginImage = () => {
  return (
    <div>
        <div className='farmer-image-text'>
        <WelcomeBack />
        <div className='mt-10'>
            <img src={farmer} alt=""/>
        </div>
    </div>
    </div>
  )
}

export default FarmerLoginImage