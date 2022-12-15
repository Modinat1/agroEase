import React from 'react'
import "./FarmerFinishProfile.css"

const BusinessProfilePage = () => {

    const allUser = JSON.parse(localStorage.getItem("loginUserInfo")) || [];
    const businessInfo = allUser.Store
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
                    
                </div>
                <div>
                    <p>{businessInfo?.name}</p>
                    <p>{businessInfo?.business_email}</p>
                    <p>{businessInfo?.phone_number}</p>
                    <p>{businessInfo?.description}</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessProfilePage