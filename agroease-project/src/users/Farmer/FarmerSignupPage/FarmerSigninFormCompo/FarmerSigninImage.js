import React from 'react'
import "./FarmerSigninImge.css"
import farmer from "../../../../images/Farm.png"

const FarmerSigninImage = () => {
  return (
    <div>
        <div className='farmer-image-text'>
            <h1 className="text-2xl font-medium text-left">Signup as a Farmer</h1>
            <div className='mt-10'>
                <img src={farmer} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default FarmerSigninImage