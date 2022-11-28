import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";

import { Progress } from "./BuyerPayementComponent/Progress";
import * as yup from "yup";

import visaCard from "../../../images/visa.png";
import masterCard from "../../../images/mastercard.png";
import PaymentInputs from "./BuyerPayementComponent/CreditCardValidator";
export const BuyerPayment = () => {
	// const navigate = useNavigate();
	// const { handleChange, handleBlur, handleSubmit, errors, values, touched } =
	// 	useFormik({
	// 		initialValues: {
	// 			fullName: "",
	// 			cardNumber: "",
	// 			expiryMonth: "",
	// 			expiryYear: "",
	// 			cvv: "",
	// 		},
	// 		validationSchema: yup.object().shape({
	// 			fullName: yup.string().required("Required"),
	// 			cardNumber: yup.string().required("Required"),
	// 			expiryMonth: yup.date().required("Required"),
	// 			expiryYear: yup.date().required("Required"),
	// 			cvv: yup.string().required("Required"),
	// 		}),
	// 		onSubmit: async (values) => {
	// 			console.log(JSON.stringify(values, null, 2));
	// 			setTimeout(() => {
	// 				console.log(JSON.stringify(values, null, 2));
	// 				// setSubmitting(false);
	// 				// resetForm();
	// 				//   handleUserRegistration(values)
	// 				navigate("/BuyerOrderreview");
	// 			}, 4000);
	// 		},
	// 	});

	return (
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />
				<div className='mt-20 flex  w-2/3 md:max-w-md m-auto flex-col'>
					<h3 className='text-center'>Payment Details</h3>

					<PaymentInputs />
				</div>
				{/* <form
					onSubmit={handleSubmit}
					className='shipping-form shipping-form-step  shipping-form-active'
					action>
					<h3>Payment Details</h3>
					<div className='shipping-form-group'>
						<label htmlFor='name-on-card'>Name on Card</label>
						<input
							className='name-on-card'
							type='text'
							name='fullName'
							value={values.fullName}
							onChange={handleChange}
						/>
						{touched.fullName && errors.fullName ? (
							<span className='text-red-500'>{errors.fullName}</span>
						) : null}
					</div>
					<div className='shipping-form-group password relative'>
						
						<label htmlFor='card-number'>Card Number</label>
						<input
							className='card-number'
							type='text'
							name='cardNumber'
							value={values.cardNumber}
							onChange={handleChange}
						/>
						<div style={{ width: "30px" }} className='absolute right-2 top-12'>
							<img style={{ width: "100%" }} src={visaCard} alt='' />
						</div>
						<div style={{ width: "30px" }} className='absolute right-10 top-12'>
							<img style={{ width: "100%" }} src={masterCard} alt='' />
						</div>

						{touched.cardNumber && errors.cardNumber ? (
							<span className='text-red-500'>{errors.cardNumber}</span>
						) : null}
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='expiry-date'>Expiry Date</label>
							<div className='card-expiry'>
								<input
									className='expiry-date'
									type='number'
									name='expiryMonth'
									value={values.expiryMonth}
									onChange={handleChange}
								/>
								<span>/</span>
								<input
									className='expiry-date'
									type='number'
									name='expiryYear'
									value={values.expiryYear}
									onChange={handleChange}
								/>
							</div>
							{touched.expiryYear && errors.expiryYear ? (
								<span className='text-red-500'>{errors.expiryYear}</span>
							) : null}
						</div>
						<div className='state-content'>
							<label htmlFor='ccv'>CVV</label>
							<input
								className='cvv'
								type='number'
								name='cvv'
								value={values.cvv}
								onChange={handleChange}
							/>
							{touched.cvv && errors.cvv ? (
								<span className='text-red-500'>{errors.cvv}</span>
							) : null}
						</div>
					</div>
					<div className='shipping-form-group-btn'>
						
						
						<button
							className='shipping-proceed-btn btn-next btn-payment'
							type='submit'>
							Next
						</button>
						
					</div>
				</form> */}
			</div>
			<Footer />
		</>
	);
};
