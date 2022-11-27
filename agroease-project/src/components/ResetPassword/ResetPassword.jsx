import React from 'react'
import './ResetPassword.css'
import { Formik } from 'formik'
import Navbar1 from '../Navbar1/Navbar1'

export const ResetPassword = () => {
  return (
    <>
    <Navbar1/>
    	<div className='reset_password_form'>
            <Formik>
			<form>
				<h2 className='reset_password_form_title'>Reset Password</h2>
				<label >Email Address</label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Enter your email'
					// value={values.email}
					/>
				{/* {errors.email && touched.email && errors.email} */}
                <button className='reset_btn' type='submit'>Send</button>
                </form>
                </Formik>
        </div>
    </>
  )
}
