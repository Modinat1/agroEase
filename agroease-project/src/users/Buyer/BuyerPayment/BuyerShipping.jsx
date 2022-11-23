import React from "react";
import { Link } from "react-router-dom";

import "./BuyerPaymentCSS/Shipping.css";
import { Progress } from "./BuyerPayementComponent/Progress";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";
import { useFormik } from "formik";

export const BuyerShipping = () => {
	const validate = (values) => {
		const errors = {};
		if (!values.name) {
			errors.firstName = "Required";
		}

		if (!values.phone) {
			errors.lastName = "Required";
		}

		if (!values.email) {
			errors.email = "Required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values.localGov) {
			errors.password = "Required";
		}

		if (!values.state) {
			errors.password = "Required";
		}

		if (!values.shippingAdd) {
			errors.password = "Required";
		}

		// if (!values.confirmPassword) {
		// 	errors.confirmPassword = "Required";
		// } else if (values.password !== values.confirmPassword) {
		// 	errors.confirmPassword = "Must match with password";
		// }

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			email: "",
			locaGov: "",
			state: "",
			shippingAdd: "",
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
					className='shipping-form shipping-form-active shipping-form-step'
					onSubmit={formik.handleSubmit}>
					<h3>Shipping Details</h3>
					<div className='shipping-form-group'>
						<label htmlFor='name'>Name</label>
						<input
							className='username'
							type='text'
							name='name'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div style={{ color: "red" }}>{formik.errors.name}</div>
						) : null}
					</div>
					<div className='shipping-form-group password'>
						{/* <i class="fa-solid fa-eye"></i> */}
						<label htmlFor='shipping-Phone'>Mobile Number</label>
						<input
							className='userphone'
							type='text'
							name='phone'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.phone}
						/>
						{formik.touched.phone && formik.errors.phone ? (
							<div style={{ color: "red" }}>{formik.errors.phone}</div>
						) : null}
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='state'>State</label>
							<input
								className='userstate'
								type='text'
								name='state'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.state}
							/>
							{formik.touched.state && formik.errors.state ? (
								<div style={{ color: "red" }}>{formik.errors.state}</div>
							) : null}
						</div>
						<div className='state-content'>
							<label htmlFor='local-gov'>Local Government</label>
							<input
								className='userlga'
								type='text'
								name='localGgov'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.locaGov}
							/>
							{formik.touched.locaGov && formik.errors.locaGov ? (
								<div style={{ color: "red" }}>{formik.errors.locaGov}</div>
							) : null}
						</div>
					</div>
					<div className='shipping-form-group shipping-form-step'>
						<label htmlFor='shipping-address'>Address</label>
						<input
							className='useradd'
							type='text'
							name='shippingAdd'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.shippingAdd}
						/>
						{formik.touched.shippingAdd && formik.errors.shippingAdd ? (
							<div style={{ color: "red" }}>{formik.errors.shippingAdd}</div>
						) : null}
					</div>
					<div className='shipping-form-group-btn'>
						{/* <button class="shipping-proceed-btn btn-prev" type="submit">Back</button> */}
						<Link to={"/BuyerPayment"}>
							<button className='shipping-proceed-btn ' type='submit'>
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
