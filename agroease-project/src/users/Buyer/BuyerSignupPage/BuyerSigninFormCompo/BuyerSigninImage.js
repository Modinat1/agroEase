import React from 'react'
import blackgirl from "../../../../images/blackgirl.png"

const BuyerSigninImage = () => {
  return (
    <div className='broker-image-text flex'>
            <div className='mt-10'>
                <img src={blackgirl} alt=""/>
            </div>
            <h1 className="text-2xl font-medium ">Signup as an Buyer</h1>
        </div>
  )
}

export default BuyerSigninImage