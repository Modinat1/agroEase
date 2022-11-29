import React from 'react'
import './ResetPassword.css'
import { Formik } from 'formik'
import Loginschema from '../Yup/Schema/LoginValidation'
import Navbar1 from '../Navbar1/Navbar1'

export const EnterPassword = () => {
  return (
    <>
    <Navbar1/>
    	<div className='reset_password_form'>
            <Formik
            validationSchema={Loginschema}
            validate={(values) => {
				const { password } = values;

				// "key": errorMessage
				const errors = {};
				if (!password)
				errors.password = (
				<small className='text-red-500'>Password cannot be empty</small>
				);

				return errors;
				}}		
            >
            {({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleReset,
				handleSubmit,
				isSubmitting,
					/* and other goodies */
				}) => (
                <React.Fragment>
			<form>
				<h2 className='reset_password_form_title'>New Password</h2>
				<label>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						placeholder='Enter new password'
						// onChange={handleChange}
						onBlur={handleBlur}
						// value={values.password}
						/>
						{errors.password && touched.password && errors.password}
                <button className='reset_btn' type='submit'>Submit</button>
                </form>
                </React.Fragment>
		)}
                </Formik>
        </div>
        
    </>
  )
}
