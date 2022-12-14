import React from 'react'
import "./FarmerFinishProfile.css"

const BusinessProfilePage = () => {
  return (
    <div>
        <div className='business-prof-width'>
            <div>
                <h1 className='farmer-finish-title'>Business Details</h1>
            </div>
            <div className='business-prof-details'>
                <div>
                    <p>Business Name</p>
                    <p>Business Email</p>
                    <p>Business Phone Number</p>
                    <p>Business Description</p>
                    <p>National Identification Number</p>
                </div>
                <div>
                    <p>Cyndy Foods</p>
                    <p>cyndy@gmail.com</p>
                    <p>09098987876</p>
                    <p>Cyndy Foods is a Store that sells package products</p>
                    <p>22289878987</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessProfilePage