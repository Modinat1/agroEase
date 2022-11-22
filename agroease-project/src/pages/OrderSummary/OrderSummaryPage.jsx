import "./OrderSummaryPage.css";
import summaryTractor from "../../images/summaryTractor.png";
import summaryChiken1 from "../../images/summaryChiken1.png";
import summaryCow from "../../images/summaryCow.png";
import summaryRice from "../../images/summaryRice.png";
import summaryChikenRectangle from "../../images/summaryChikenRectangle.png";
import React, { useState } from "react";
import { ProductContext } from "../../Context/Store/ProductContext";
import { useEffect } from "react";

const OrderSummaryPage = () => {
	const cartContext = React.useContext(ProductContext);
	console.log(cartContext);
	const {
		state: { cart },
		dispatch,
	} = cartContext;

	const [subTotal, setsubTotal] = useState();
	const [Vat, setVat] = useState();
	const [total, setTotal] = useState();

	console.log(cart[0].price);

	useEffect(() => {
		setsubTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
		setVat(subTotal * 0.05);
		setTotal(subTotal - Number(Vat));
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
						return (
							<div className='summary-order-box-2'>
								<div className='summary-empty'>
									<img src={prod.image} alt='' />
								</div>
								<div className='summary-order-total'>
									<h5>{prod.name}</h5>
									<h5 className='sumary-0rder-money'> {prod.price} </h5>
								</div>
								<div
									className='summary-order-cancel'
									onClick={() => {
										dispatch({
											type: "REMOVE_FROM_CART",
											payload: prod,
										});
									}}>
									{" "}
									✖
								</div>
							</div>
						);
					})}
					{/* 2 */}
					{/* <div className="summary-order-box-2">
            <div className="summary-empty">
              <img src={summaryChikenRectangle} alt=''/>
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div> */}
					{/* 3 */}
					{/* <div className="summary-order-box-2">
            <div className="summary-empty">
            <img src={summaryChikenRectangle} alt=''/>
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div> */}

					{/* 4 */}

					{/* <div className="summary-order-box-2">
            <div className="summary-empty">
            <img src={summaryChikenRectangle} alt=''/>
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div> */}
				</div>
				<section className='summary-order-button-container'>
					<button className='summary-order-checkout'>
						{" "}
						Proceed to checkout
					</button>
				</section>
				<section className='summery-order-total-vat'>
					<div className='subtotal-vat-shipping-summary-left'>
						<h4>Subtotal</h4>
						<h4>VAT</h4>

						<h4>Total</h4>
					</div>
					<div className=' '>
						<h4>{subTotal}</h4>
						<h4>{Vat}</h4>
						<h4>{total}</h4>
					</div>
				</section>
			</div>
		</section>
	);
};

export default OrderSummaryPage;
