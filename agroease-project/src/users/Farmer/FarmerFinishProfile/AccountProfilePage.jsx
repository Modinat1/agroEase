import React from 'react'
import "./FarmerFinishProfile.css"

const AccountProfilePage = () => {
  return (
    <div>
        <div className='account-prof-width'>
            <div>
                <h1 className='farmer-finish-title'>Account Details</h1>
            </div>
            <div className='account-prof-details'>
                <div>
                    <p>Account Name</p>
                    <p>Account Number</p>
                    <p>Bank</p>
                    <p>Date of Birth</p>
                </div>
                <div>
                    <p>Cynthia Nwankwo</p>
                    <p>07234567</p>
                    <p>Access Bank</p>
                    <p>21/02/2000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountProfilePage