import React from 'react'
import hero2img from "../../../images/hero2img.png"
import "./NewHeroSection.css"

const NewHeroSecondImg = () => {
  return (
    <div>
        <div className="newhero-image-details">
                <div className="newhero-image-width">
                    <img className="img" src={hero2img} alt="food"/>
                    <div className="newhero-image-overlay">
                        <h1>Do you wish to 
                            Sell your product
                            as a Farmer?</h1>
                            <div className='newhero-btn'>
                              <button>Click Here</button>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewHeroSecondImg