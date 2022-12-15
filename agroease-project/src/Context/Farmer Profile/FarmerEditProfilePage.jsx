import './FarmerEditProfilePage.css'

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import React from 'react'
import emeka from '../../images/emeka.png'
import { useState } from 'react'
import axiosInstance from "../../Context/axios-config/axios-user-config";
const FarmerEditProfilePage = () => {
  const [renderProfile, setrenderProfile] = useState([])

  const renderFarmerProfile = async () => {
    try {
      const getProfile = await axiosInstance.get('/v1/store')
      console.log(getProfile)
    } catch (error) {}
  }
  return (
    <div className="editProfile-body">
      <main className="edit-profile-main-container">
        <section className="profile-image-top-section">
          <div className="profile-avater-section-left-container">
            <div className="profile-edit-image">
              <img src={emeka} className="profile-edit-image" alt="Emeka" />
              {/* <img src="profile_avater.PNG" alt="profile-image" className="profile-edit-image" /> */}
            </div>
            {/*another container beside image container  */}
            <div className="profile-side-information">
              <h1 className="profile-name">Emeka Augustine Odezulu</h1>
              <h3 className="profile-status">Farmer</h3>
              <br />
              <div className="profile-mail">
                {/* <img src="mail-line.png" alt="profile email" /> */}
                <AiOutlineMail />
                <h4 className="profile-email">mekus@gmail.com</h4>
              </div>
              <br />
              <div className="profile-phone">
                {/* <img src="phone-line.png" alt="profile phone number" /> */}
                <AiOutlinePhone />
                <h4 className="profile-email">08010456893</h4>
              </div>
            </div>
          </div>
          {/* right-edit button */}
          <div className="profile-edit-button-right-container">
            <div className="pofile-edit-button">
              <button className="profile-edit-button">Edit Profile </button>
            </div>
          </div>
        </section>
        <section className="farmer-profile-information-container">
          {/* personal details */}
          <div className="profile-personal-details-container">
            <h3 className="profile-personal-details">Personal Details</h3>
            <div className="other-personal-details">
              <div className="personal-details-name">
                <h4>Name</h4>
                <h4>Emeka Augustine Odezulu</h4>
              </div>
              {/* email */}
              <div className="personal-details-name">
                <h4>Email</h4>
                <h4>mekus@gmail.com</h4>
              </div>
              {/* number */}
              <div className="personal-details-name">
                <h4>Number</h4>
                <h4>08010446893</h4>
              </div>
            </div>
          </div>
          {/* busines details */}
          <div className="profile-personal-details-container">
            <h3 className="profile-personal-details">Business Details</h3>
            <div className="other-personal-details">
              <div className="personal-details-name">
                <h4>Business Name</h4>
                <h4>Emetech Agro Ventures</h4>
              </div>
              {/* email */}
              <div className="personal-details-name">
                <h4>Business Email</h4>
                <h4>mekus@gmail.com</h4>
              </div>
              {/* number */}
              <div className="personal-details-name">
                <h4>Description</h4>
                <h4> Plantain dealer</h4>
              </div>
              <div className="personal-details-name">
                <h4>NIN Number</h4>
                <h4>4123678992</h4>
              </div>
            </div>
          </div>
          {/* Accout details */}
          <div className="profile-personal-details-container">
            <h3 className="profile-personal-details">Account Details</h3>
            <div className="other-personal-details">
              <div className="personal-details-name">
                <h4>Account Name</h4>
                <h4>Emeka Augustine</h4>
              </div>
              {/* email */}
              <div className="personal-details-name">
                <h4>Account Number</h4>
                <h4>0084751379</h4>
              </div>
              {/* number */}
              <div className="personal-details-name">
                <h4>Bank Name</h4>
                <h4>First Bank</h4>
              </div>
              <div className="personal-details-name">
                <h4>Date Of Birth</h4>
                <h4>12/05/2022</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default FarmerEditProfilePage
