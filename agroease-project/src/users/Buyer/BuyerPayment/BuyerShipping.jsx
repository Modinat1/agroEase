import React from "react";
import { Link } from "react-router-dom";

import "./BuyerPaymentCSS/Shipping.css";
import { Progress } from "./BuyerPayementComponent/Progress";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";

export const BuyerShipping = () => {
	return (
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />
				<form
					className='shipping-form shipping-form-active shipping-form-step'
					action>
					<h3>Shipping Details</h3>
					<div className='shipping-form-group'>
						<label htmlFor='name'>Name</label>
						<input className='username' type='text' name='name' required />
					</div>
					<div className='shipping-form-group password'>
						{/* <i class="fa-solid fa-eye"></i> */}
						<label htmlFor='shipping-Phone'>Mobile Number</label>
						<input className='userphone' type='text' name='phone' required />
						<p className='phoneErr' />
					</div>
					<div className='shipping-form-group state'>
						<div className='state-content'>
							<label htmlFor='state'>State</label>
							<input className='userstate' type='text' name='state' required />
						</div>
						<div className='state-content'>
							<label htmlFor='local-gov'>Local Government</label>
							<input className='userlga' type='text' name='email' required />
						</div>
					</div>
					<div className='shipping-form-group shipping-form-step'>
						<label htmlFor='shipping-address'>Address</label>
						<input
							className='useradd'
							type='text'
							name='shipping-address'
							required
						/>
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
