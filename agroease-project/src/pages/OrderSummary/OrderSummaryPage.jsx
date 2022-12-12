import "./OrderSummaryPage.css";
import summaryTractor from "../../images/summaryTractor.png";
import summaryChiken1 from "../../images/summaryChiken1.png";
import summaryCow from "../../images/summaryCow.png";
import summaryRice from "../../images/summaryRice.png";
// import summaryChikenRectangle from "../../images/summaryChikenRectangle.png";
import React, { useState } from "react";
// import { ProductContext } from "../../Context/Store/ProductContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/Store/productContext";

const OrderSummaryPage = () => {
	const cartContext = React.useContext(ProductContext);
	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	// const cart = JSON.parse(localStorage.getItem("cartItems"));
	// const cart = cartContext.state.cart;

	const { dispatch, state } = cartContext;
	const { cart } = state;
	console.log(cart);

	const [subTotal, setsubTotal] = useState(0);

	useEffect(() => {
		setsubTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	return (
		<section className='general-container'>
			<div className='summary-order-left'>
				<h2 className='order-summery-top-pick'> Top Picks</h2>
				<div className='summery-box1'>
					<div>
						<img src={summaryTractor} alt='' />
					</div>
					<div className='summary-image-details'>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='sumary-0rder-money'> N120,000.00</h5>
					</div>
				</div>
				{/* 2 */}
				<div className='summery-box1'>
					<div>
						<img src={summaryChiken1} alt='' />
					</div>
					<div className='summary-image-details'>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='sumary-0rder-money'> N120,000.00</h5>
					</div>
				</div>
				{/* 3 */}
				<div className='summery-box1'>
					<div>
						<img src={summaryChiken1} alt='' />
					</div>
					<div className='summary-image-details'>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='sumary-0rder-money'> N120,000.00</h5>
					</div>
				</div>
				{/* 4 */}
				<div className='summery-box1'>
					<div>
						<img src={summaryCow} alt='' />
					</div>
					<div className='summary-image-details'>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='sumary-0rder-money'> N120,000.00</h5>
					</div>
				</div>
				{/* 5 */}
				<div className='summery-box1'>
					<div>
						<img src={summaryRice} alt='' />
					</div>
					<div className='summary-image-details'>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='summery-details1'> Fulani Cow</h5>
						<h5 className='sumary-0rder-money'> N120,000.00</h5>
					</div>
				</div>
			</div>
			<div className='summary-order-right'>
				<h2 className='summary-order-right-header'>Summary Order</h2>
				{/*  box two section */}
				<div className='summarry-order-box2-biggestContainer'>
					{/* <div class="summary-order-box2-biggestContainerInner"></div> */}
					{cart.map((prod) => {
						// creating an array from the product quantity
						const prodqty = Array.from(
							{ length: prod.quantity },
							(_, i) => i + 1
						);

						// mapping the product details
						return (
							<div key={prod.id} className='summary-order-box-2'>
								<div
									className='summary-empty'
									style={{ width: "200px", height: "100px" }}>
									<img
										src={prod?.Product_Images[0].url}
										alt=''
										style={{ width: "100%", height: "100%" }}
									/>
								</div>
								<div className='summary-order-total'>
									<h5>{prod.name}</h5>
									<h5 className='sumary-0rder-money'>
										{formatter.format(prod.price)}
									</h5>
								</div>
								<div className='flex'>
									<select
										value={prod.qty}
										onChange={(e) =>
											dispatch({
												type: "CHANGE_QTY",
												payload: {
													id: prod.id,
													qty: e.target.value,
												},
											})
										}>
										{prodqty.map((x) => (
											<option key={x}>{x}</option>
										))}
									</select>
								</div>
								<div
									className='summary-order-cancel'
									onClick={() => {
										dispatch({
											type: "REMOVE_FROM_CART",
											payload: prod,
										});
									}}>
									✖
								</div>
							</div>
						);
					})}
				</div>

				<section className='summary-order-button-container'>
					<Link to={"/BuyerShipping"}>
						<button className='summary-order-checkout'>
							Proceed to checkout
						</button>
					</Link>
				</section>
				<section className='summery-order-total-vat'>
					<div className='subtotal-vat-shipping-summary-left'>
						<h4>Subtotal</h4>
						<h4>Shipping</h4>
						<h4>Total</h4>
					</div>
					<div className=' '>
						<h4>{formatter.format(subTotal)}</h4>
						<h4>{formatter.format(0)}</h4>
						<h4>{formatter.format(subTotal)}</h4>
					</div>
				</section>
			</div>
		</section>
	);
};

export default OrderSummaryPage;
