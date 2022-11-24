import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./BuyerPaymentCSS/Shipping.css";
import { Progress } from "./BuyerPayementComponent/Progress";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";
import { useFormik } from "formik";
// import CountrySelector from "./BuyerPayementComponent/CountrySelector";
import { countryList } from "./BuyerPayementComponent/countryModule";
import { stateList } from "./BuyerPayementComponent/countryModule";
import { useState } from "react";

export const BuyerShipping = () => {
	const navigate = useNavigate();
	const initialValues = {
		username: "",
		// email: "",
		phone: "",
		country: "",
		state: "",
		zip: "",
		city: "",
		address: "",
	};

	const [formValue, setformValue] = useState(initialValues);

	const [formErrors, setformErrors] = useState({});

	const [isSubmit, setisSubmit] = useState(false);

	const [ischecked, setischecked] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setformValue({ ...formValue, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setformErrors(validate(formValue));
		setisSubmit(true);
		console.log(formValue);
	};

	// useEffect(() => {
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 	}
	// }, [formErrors]);

	const validate = (values) => {
		// const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		const errors = {};
		if (!values.username) {
			errors.username = "Required";
		}

		// if (!values.email) {
		// 	errors.email = "Required";
		// } else if (!emailRegex.test(values.email)) {
		// 	errors.email = "Enter a valid email";
		// }

		if (!values.country) {
			errors.country = "Required";
		}
		if (!values.state) {
			errors.state = "Required";
		}
		if (!values.city) {
			errors.city = "Required";
		}
		if (!values.zip) {
			errors.zip = "Required";
		}
		if (!values.address) {
			errors.address = "Required";
		}
		return errors;
	};

	return (
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />

				<form
					onSubmit={handleSubmit}
					className='shipping-form shipping-form-active shipping-form-step'>
					<h3>Shipping Details</h3>
					<div className='shipping-form-group'>
						<label htmlFor='name'>Name</label>
						<input
							className='username'
							type='text'
							name='username'
							onChange={handleChange}
						/>
						<p className='error'>{formErrors.username}</p>
					</div>
					<div className='shipping-form-group password'>
						{/* <i class="fa-solid fa-eye"></i> */}
						<label htmlFor='shipping-Phone'>Mobile Number</label>
						<input
							className='userphone'
							type='text'
							name='phone'
							onChange={handleChange}
						/>
						<p className='error'>{formErrors.phone}</p>
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='state'>Country</label>
							<select
								className='shipping_slect'
								type='text'
								name='country'
								onChange={handleChange}>
								{countryList.map((country, index) => {
									return <option key={index}>{country}</option>;
								})}
							</select>
							<p className='error'>{formErrors.country}</p>
							{/* <CountrySelector className='shipping_slect' /> */}
						</div>
						<div className='state-content'>
							<label htmlFor='state'>State</label>
							<select
								className='shipping_slect'
								type='text'
								name='state'
								onChange={handleChange}>
								{stateList.map((state, index) => {
									return <option key={index}>{state}</option>;
								})}
							</select>
							<p className='error'>{formErrors.state}</p>
						</div>
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='local-gov'>City</label>
							<input
								className='userstate'
								type='text'
								name='city'
								onChange={handleChange}
							/>
							<p className='error'>{formErrors.city}</p>
						</div>
						<div className='state-content'>
							<label htmlFor='local-gov'>Zip</label>

							<input
								className='userlga'
								type='text'
								name='zip'
								onChange={handleChange}
							/>
							<p className='error'>{formErrors.zip}</p>
						</div>
					</div>
					<div className='shipping-form-group shipping-form-step'>
						<label htmlFor='shipping-address'>Address</label>
						<input
							className='useradd'
							type='text'
							name='address'
							onChange={handleChange}
						/>
						<p className='error'>{formErrors.address}</p>
					</div>
					<div className='shipping-form-group-btn'>
						{/* <button class="shipping-proceed-btn btn-prev" type="submit">Back</button> */}
						{/* <Link to={"/BuyerPayment"}> */}
						<button className='shipping-proceed-btn ' type='submit'>
							Next
						</button>
						{/* </Link> */}
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};
