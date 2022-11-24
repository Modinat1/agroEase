import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import "./HeadphoneSection.css"

const HeadphoneSection = () => {
  return (
    <div className='headphonesection-width'>
        <div>
            <FaHeadphonesAlt className='main-green' style={{fontSize: 25}}/>
        </div>
        <div>
            <p>08089098678</p>
        </div>
        <div>
            <p>08089098678</p>
        </div>
    </div>
  )
}

export default HeadphoneSection