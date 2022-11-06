import React from "react";
import { Link } from "react-router-dom";
import { Buyernav } from "./Buyernav";
// import Footer from "./Footer";
import { Progress } from "./Progress";

export const Oderreview = () => {
	return (
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />
				<div className='shipping-form shipping-form-active'>
					<h3 className='order-h3'>Order Review</h3>
					<section className='overview-container'>
						<div>
							<div className='cart-review'>
								<div className='product-review'>
									<div className='product-review-container'>
										<div className='product-review-img'>
											<img src='/assets/goat.jpg' alt='' />
										</div>
										<div>
											<h4 className='product-review-text'>Fulani Cow</h4>
											<p>Special Breed</p>
										</div>
									</div>
									<div className='product-review-price'>#26,000</div>
								</div>
								<div className='product-review'>
									<div className='product-review-container'>
										<div className='product-review-img'>
											<img src='/assets/goat.jpg' alt='' />
										</div>
										<div>
											<h4 className='product-review-text'>Fulani Cow</h4>
											<p>Special Breed</p>
										</div>
									</div>
									<div className='product-review-price'>#26,000</div>
								</div>
								<div className='product-review'>
									<div className='product-review-container'>
										<div className='product-review-img'>
											<img src='/assets/goat.jpg' alt='' />
										</div>
										<div>
											<h4 className='product-review-text'>Fulani Cow</h4>
											<p>Special Breed</p>
										</div>
									</div>
									<div className='product-review-price'>#26,000</div>
								</div>
								<div className='product-review'>
									<div className='product-review-container'>
										<div className='product-review-img'>
											<img src='/assets/goat.jpg' alt='' />
										</div>
										<div>
											<h4 className='product-review-text'>Fulani Cow</h4>
											<p>Special Breed</p>
										</div>
									</div>
									<div className='product-review-price'>#26,000</div>
								</div>
							</div>
							<div className='cart-review-total'>
								<div className='cart-total'>
									<p>Subtotal</p>
									<p>N173,500</p>
								</div>
								<div className='cart-total'>
									<p>VAT</p>
									<p>N1340</p>
								</div>
								<div className='cart-total'>
									<p>Shipping</p>
									<p>00</p>
								</div>
								<div className='cart-total'>
									<p>Total</p>
									<p>N174,840</p>
								</div>
							</div>
						</div>
						<div className='user-review'>
							<h4 className='user-review-name'>Gbenga Oyewale</h4>
							<h4 className='user-review-number'>+2347032352157</h4>
							<h4 className='user-review-State'>Lagos, State</h4>
							<h4 className='user-review-lga'>Eti, Osa LGA</h4>
							<h4 className='user-review-des'>
								Kindly check our return policy page for more information on how
								to resolve issues concerning bad goods
							</h4>
						</div>
						<div className='payment-review-container'>
							<div className='card-details'>
								<div className='payment-review'>
									<div className='card-img-wrapper'>
										<div className='check-box check-box-active' />
										<div className='card-img'>
											<img src='/assets/mastercard.png' alt='' />
											<div>
												<h5 className='review-mask'>************1234</h5>
												<h5 className='expiry'>11/4</h5>
											</div>
										</div>
									</div>
									<div className='card-btn'>
										<button className='btn-green border-green'>
											<img src='/assets/Vectorsettings.png' alt='' />
											Edit
										</button>
									</div>
								</div>
								<div className='payment-review'>
									<div className='card-img-wrapper'>
										<div className='check-box' />
										<div className='card-img'>
											<img src='/assets/mastercard.png' alt='' />
											<div>
												<h5 className='review-mask'>************1234</h5>
												<h5 className='expiry'>11/4</h5>
											</div>
										</div>
									</div>
									<div className='card-btn'>
										<button className='btn-green border-green'>
											<img src='/assets/Vectorsettings.png' alt='' />
											Edit
										</button>
									</div>
								</div>
								<button className='add-card'>Add Card</button>
							</div>
							<div className='add-shipping'>
								<h4>Available Shipping Methods</h4>
								<div className='fedex-shipping'>
									<div className='fedEx'>
										<img src='/assets/FedExfedex.png' alt='' />
									</div>
									<div className='fedEx-des'>
										<h5>FedEx Delivery</h5>
										<p>Delivery within 2-3 working days</p>
									</div>
									<div className='add-shipping-btn'>
										<p>Free</p>
										<div className='check-box check-box-active' />
									</div>
								</div>
							</div>
						</div>
					</section>
					<Link to={"/PaymentProcessing"}>
						<button className='confirm-order'>Confirm Order</button>
					</Link>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
};
