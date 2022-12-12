import React from 'react'
import hero1img from "../../../images/hero1img.png"

const NewHeroFirstImg = () => {
  return (
    <div>
        <div className="newhero1-image-details">
                <div className="newhero1-image-width">
                    <img className="img" src={hero1img} alt="food"/>
                    <div className="newhero1-image-overlay">
                        <h1>Come and buy cheap farm <br />
                            products oooo</h1>
                        <div className='newhero1-btn'>
                              <button>View Products</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewHeroFirstImg