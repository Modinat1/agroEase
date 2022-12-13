import React from 'react'
import "./FarmerSingleProfile.css"
import Navbar1 from '../../../components/Navbar1/Navbar1'
import { FarmerProfilePage } from '../FarmerProfile/FarmerProfilePage'

const FarmerSingleProfile = () => {
  return (
    <div>
        <Navbar1 />
        <div className='farmer-single-profile'>
            <h1>Farmer Profile Page</h1>
        </div>
            <FarmerProfilePage />
        
    </div>
  )
}

export default FarmerSingleProfile