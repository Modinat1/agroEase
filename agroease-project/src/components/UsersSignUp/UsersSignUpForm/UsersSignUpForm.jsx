import React from "react";
import { Formik } from "formik";
import "./UsersSignUpForm.css";
import { useNavigate } from "react-router-dom";
import Loginschema from "../../Yup/Schema/LoginValidation";

export const UsersSignUpForm = () => {
	const navigate = useNavigate();

	return (
		<div>

		<Formik
				initialValues={{
					firstname: "",
					lastname: "",
					email: "",
					phone_number:"",
					password: "",
				}}
				validationSchema={Loginschema}
				validate={(values) => {
					const { firstname, lastname, email, phone_number, password } = values;

					// "key": errorMessage
					const errors = {};
					if (!firstname)
						errors.firstname = (
							<small className='text-red-500'>Firstname cannot be empty</small>
						);

					if (!lastname)
						errors.lastname = (
							<small className='text-red-500'>Lastname cannot be empty</small>
						);

					if (!email)
						errors.email = (
							<small className='text-red-500'>Email cannot be empty</small>
						);
					if (!phone_number)
						errors.phone_number = (
							<small className='text-red-500'>Phone Number cannot be empty</small>
						);

					if (!password)
						errors.password = (
							<small className='text-red-500'>Password cannot be empty</small>
						);

					return errors;
				}}
				// onSubmitting
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
						resetForm();
						navigate("/UsersSignIn");
					}, 4000);
				}}>
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
				<div className='broker_signup_form'>
					<form >
						<h2 className='broker_signup_form_title'>Create an Account</h2>
						<label>First Name</label>
						<input
							id='firstname'
							name='firstname'
							type='text'
							placeholder='First Name*'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.firstname}
						/>
						{errors.firstname && touched.firstname && errors.firstname}

						<label>Last Name</label>
						<input
							id='lastname'
							name='lastname'
							type='text'
							placeholder='Last Name*'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastname}
						/>
						{errors.lastname && touched.lastname && errors.lastname}

						<label>Email Address</label>
						<input
							id='email'
							name='email'
							type='email'
							placeholder='Email*'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}

						<label>Phone Number</label>
						<input
							id='phone_number'
							name='phone_number'
							type='text'
							placeholder='Phone Number*'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.phone_number}
						/>
						{errors.phone_number && touched.phone_number && errors.phone_number}

						<label>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							placeholder='Password*'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password && errors.password}

						{/* <label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							id='confirmPassword'
							name='confirmPassword'
							type='password'
							placeholder='Confirm Password*'
							onBlur={formik.handleBlur}
							// value={formik.values.confirmPassword}
						/>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
						) : null} */}

						<small className='broker_terms'>
							By clicking, you agree to the AgroEase{" "}
							<span className='broker_green'>Term of Service</span> and
							acknowledge, that AgroEase{" "}
							<span className='broker_green'>Privacy Policy</span> applies to you
						</small>
						<button 
								className='signup_form_btn' 
								disabled={isSubmitting}
								type="button"
								onClick={handleSubmit}
								>

									{
										isSubmitting? ( "Submitting...") : ("Sign Up")
									}
							
						</button>
					</form>
				</div>
		</React.Fragment>
		)}
		</Formik>
		</div>
	);
};
