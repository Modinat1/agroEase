import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import FarmerLoginImage from './FarmerLoginFormCompo/FarmerLoginImage'
import FarmerLogInPageForm from './FarmerLoginFormCompo/FarmerLogInPageForm'



const FarmerLoginForm = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform farmer-height'>
            <div className='signin-image-and-form2 '>
                <FarmerLoginImage />
                <FarmerLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default FarmerLoginForm