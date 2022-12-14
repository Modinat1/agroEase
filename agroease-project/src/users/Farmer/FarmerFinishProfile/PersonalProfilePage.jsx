import React from 'react'
import "./FarmerFinishProfile.css"
import profimage from "../../../images/cynthia.png"

const PersonalProfilePage = () => {
  return (
    <div>
        <div className='personal-prof-width'>
            <div className='personal-prof-img'>
                <img src={profimage} alt="" />
            </div>
            <div>
                <h2 className='personal-finish-title'>Cynthia Nwankwo</h2>
                <h3>nwacynti25@gmail.com</h3>
                <h3>08162222284</h3>
            </div>
        </div>
    </div>
  )
}

export default PersonalProfilePage