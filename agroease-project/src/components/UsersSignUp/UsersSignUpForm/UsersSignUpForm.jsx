import React from "react";
import { useFormik } from "formik";
import "./UsersSignUpForm.css";

export const UsersSignUpForm = () => {
	const validate = (values) => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = "Required";
		} else if (values.firstName.length > 15) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required";
		} else if (values.lastName.length > 20) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values.email) {
			errors.email = "Required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values.password) {
			errors.password = "Required";
		} else if (values.password.length < 8) {
			errors.password = "Must be 8 characters or more";
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = "Required";
		} else if (values.password !== values.confirmPassword) {
			errors.confirmPassword = "Must match with password";
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<React.Fragment>
			<div className='broker_signup_form'>
				<form onSubmit={formik.handleSubmit}>
					<h2 className='broker_signup_form_title'>Create an Account</h2>
					<label htmlFor='firstName'>First Name</label>
					<input
						id='firstName'
						name='firstName'
						type='text'
						placeholder='First Name*'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
					/>
					{formik.touched.firstName && formik.errors.firstName ? (
						<div style={{ color: "red" }}>{formik.errors.firstName}</div>
					) : null}

					<label htmlFor='lastName'>Last Name</label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						placeholder='Last Name*'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.lastName}
					/>
					{formik.touched.lastName && formik.errors.lastName ? (
						<div style={{ color: "red" }}>{formik.errors.lastName}</div>
					) : null}

					<label htmlFor='email'>Email Address</label>
					<input
						id='email'
						name='email'
						type='email'
						placeholder='Email*'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div style={{ color: "red" }}>{formik.errors.email}</div>
					) : null}

					<label htmlFor='phoneNumber'>Phone Number</label>
					<input
						id='phoneNumber'
						name='phoneNumber'
						type='text'
						placeholder='Phone Number*'
						onBlur={formik.handleBlur}
						// value={formik.values.phoneNumber}
					/>
					{/* {formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null} */}

					<label htmlFor='password'>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						placeholder='Password*'
						onBlur={formik.handleBlur}
						// value={formik.values.password}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div style={{ color: "red" }}>{formik.errors.password}</div>
					) : null}

					<label htmlFor='confirmPassword'>Confirm Password</label>
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
					) : null}

					<small className='broker_terms'>
						By clicking, you agree to the AgroEase{" "}
						<span className='broker_green'>Term of Service</span> and
						acknowledge, that AgroEase{" "}
						<span className='broker_green'>Privacy Policy</span> applies to you
					</small>
					<button className='signup_form_btn' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};
