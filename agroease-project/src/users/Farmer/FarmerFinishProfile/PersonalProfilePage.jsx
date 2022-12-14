import React from 'react'
import "./FarmerFinishProfile.css"
import profimage from "../../../images/cynthia.png"

const PersonalProfilePage = () => {

    const userInfo = JSON.parse(localStorage.getItem("user"));
	const userDetails = userInfo.data
  return (
    <div>
        <div className='personal-prof-width'>
            <div className='personal-prof-img'>
                <img src={profimage} alt="" />
            </div>
            <div>
                <h2 className='personal-finish-title'>{`${userDetails?.firstname}  ${userDetails?.lastname}`}</h2>
                <h3>{userDetails?.email}</h3>
                <h3>{userDetails?.phone_number}</h3>
            </div>
        </div>
    </div>
  )
}

export default PersonalProfilePage