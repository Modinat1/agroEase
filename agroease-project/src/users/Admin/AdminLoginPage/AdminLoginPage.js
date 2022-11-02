import React from 'react'
import AdminLogInPageForm from '../../../components/LoginForm/AdminLogInPageForm'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import AdminLogInImage from './AdminLoginPageCompo/AdminLogInImage'


const AdminLoginPage = () => {
  return (
    <div>
        <Navbar1 />
        <div className='bg-signinform farmer-height'>
            <div className='signin-image-and-form2 '>
                <AdminLogInImage />
                <AdminLogInPageForm />
            </div>
        </div>
    </div>
  )
}

export default AdminLoginPage