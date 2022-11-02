import React from 'react'
import AdminLogInPageForm from '../../../components/LoginForm/AdminLogInPageForm'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import FarmerLoginImage from './FarmerLoginFormCompo/FarmerLoginImage'


const FarmerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform farmer-height'>
            <div className='signin-image-and-form2 '>
                <FarmerLoginImage />
                <AdminLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default FarmerLoginForm