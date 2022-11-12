import React from 'react'
import "./BrokerSigninImage.css"
import gardner from "../../../../images/garden.png"

const BrokerSigninImage = () => {
  return (
    <div>
        <div className='farmer-image-text'>
        <div className='mt-10'>
         <img src={gardner} alt=""/>
        </div>
        <h1 className="text-2xl font-medium text-left">Signup as a Broker</h1>
    </div>
    </div>
  )
}

export default BrokerSigninImage;

