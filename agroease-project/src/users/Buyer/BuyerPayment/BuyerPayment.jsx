import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";

import { Progress } from "./BuyerPayementComponent/Progress";

export const BuyerPayment = () => {
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
						<Link to={"/Orderreview"}>
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
