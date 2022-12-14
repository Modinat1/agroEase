import React from 'react'
import AccountProfilePage from './AccountProfilePage'
import BusinessProfilePage from './BusinessProfilePage'

import PersonalProfilePage from './PersonalProfilePage'

const FarmerFinishProfile = () => {
  return (
    <div className='farmer-finish'>
        <PersonalProfilePage />
        <di className="farmer-finish-details">
            <BusinessProfilePage />
            <AccountProfilePage />
        </di>
    </div>
  )
}

export default FarmerFinishProfile