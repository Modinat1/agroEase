import React from 'react'
import NewHeroFirstImg from './NewHeroFirstImg'
import NewHeroSecondImg from './NewHeroSecondImg'


const NewHeroSection = () => {
  return (
    <div className="max-widss newherosec-width">
      <div className='newherosec1-width'>
        <NewHeroFirstImg />
      </div>
      <div className='newherosec2-width'>
        <NewHeroSecondImg />
      </div>
    </div>
  )
}

export default NewHeroSection