import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Buyernav } from "./Buyernav";
// import Footer from "./Footer";
import { Progress } from "./BuyerPayementComponent/Progress";
import "./BuyerPaymentCSS/Review.css";
import Smove from "../../../images/SMoveSmove.png";
import Footer from "../../../components/Footer/Footer";
import { Buyernav } from "./BuyerPayementComponent/Buyernav";
import cow from "../../../images/cows.png";
import { ProductContext } from "../../../Context/Store/productContext";

export const BuyerOderreview = () => {
	const productContext = React.useContext(ProductContext);
	const { state } = productContext;
	const { cart } = state;
	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	const user = JSON.parse(localStorage.getItem("user"));
	const newAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
	const userAddress = user?.data?.Delivery_address;
	console.log(user);
	console.log(userAddress);

	const [subTotal, setsubTotal] = useState(0);

	useEffect(() => {
		setsubTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	return (
		<>
			<Buyernav />
			<div className='shipping-container'>
				<Progress />
				<div className='shipping-form shipping-form-active'>
					<h3 className='order-h3'>Order Review</h3>
					<section className='overview-container'>
						<div className='cart-review'>
							{cart.map((prod, index) => {
								return (
									<div className='product-review'>
										<div className='product-review-container'>
											<div className='product-review-img'>
												<img src={prod.image} alt='' />
											</div>
											<div className='flex flex-col items-center '>
												<h4>{prod.name}</h4>
												<p>{prod.desc}</p>
											</div>
										</div>
										<div className='product-review-price'>
											{formatter.format(prod.price)}
										</div>
									</div>
								);
							})}
							{/* <div className='product-review'>
									<div className='product-review-container'>
										<div className='product-review-img'>
											<img src={cow} alt='' />
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
											<img src={cow} alt='' />
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
											<img src={cow} alt='' />
										</div>
										<div>
											<h4 className='product-review-text'>Fulani Cow</h4>
											<p>Special Breed</p>
										</div>
									</div>
									<div className='product-review-price'>#26,000</div>
								</div> */}
							<div className='cart-review-total'>
								<div className='cart-total'>
									<p>Subtotal</p>
									<p>{formatter.format(subTotal)}</p>
								</div>

								<div className='cart-total'>
									<p>Shipping</p>
									<p>00</p>
								</div>
								<div className='cart-total'>
									<p>Total</p>
									<p>{formatter.format(subTotal)}</p>
								</div>
							</div>
						</div>

						<div className='user-review'>
							<h4 className='user-review-name'>
								{user?.data?.firstname} {user?.data?.lastname}
							</h4>
							<h4 className='user-review-number'>{user?.data?.phone_number}</h4>
							<h4 className='user-review-lga'>
								{newAddress?.city || userAddress?.city}
							</h4>
							<h4 className='user-review-State'>
								{newAddress?.state || userAddress?.state}, State
							</h4>
							<h4 className='user-review-State'>
								{newAddress?.country || userAddress?.country}
							</h4>
							<h4 className='user-review-des'>
								Kindly check our return policy page for more information on how
								to resolve issues concerning bad goods
							</h4>
						</div>
					</section>
					<Link to={"/paystackPayment"}>
						<button className='confirm-order'>Confirm Order</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
};
