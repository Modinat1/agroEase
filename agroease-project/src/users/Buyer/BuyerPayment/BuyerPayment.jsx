import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";

import { Progress } from "./BuyerPayementComponent/Progress";

export const BuyerPayment = () => {
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
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />
				<form
					className='shipping-form shipping-form-step  shipping-form-active'
					action>
					<h3>Payment Details</h3>
					<div className='shipping-form-group'>
						<label htmlFor='name-on-card'>Name on Card</label>
						<input
							className='name-on-card'
							type='text'
							name='name-on-card'
							required
						/>
					</div>
					<div className='shipping-form-group password'>
						{/* <i class="fa-solid fa-eye"></i> */}
						<label htmlFor='card-number'>Card Number</label>
						<input className='card-number' type='text' name='card-number' />
						<p className='phoneErr' />
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='expiry-date'>Expiry Date</label>
							<div className='card-expiry'>
								<input
									className='expiry-date'
									type='text'
									name='expiry-date'
									required
								/>
								<span>/</span>
								<input
									className='expiry-date'
									type='text'
									name='expiry-date'
									required
								/>
							</div>
						</div>
						<div className='state-content'>
							<label htmlFor='ccv'>CVV</label>
							<input className='cvv' type='text' name='cvv' required />
						</div>
					</div>
					<div className='shipping-form-group-btn'>
						{/* <button class="shipping-proceed-btn btn-prev" type="submit">Back</button> */}
						<Link to={"/BuyerOrderreview"}>
							<button
								className='shipping-proceed-btn btn-next btn-payment'
								type='submit'>
								Next
							</button>
						</Link>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};
