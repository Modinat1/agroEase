import React from "react";
import "./FarmerProductCard.css";

export const FarmerProductCard = () => {
	return (
		<>
			<div className='farmer_product_category_wrapper'>
				{/* card 1 */}
				<div className='farmer_product_category_card category_card-1'>
					<p className='farmer_cart_title'>LiveStock</p>
					<p className='farmer_cart_price'>0</p>
				</div>
				{/* card 2 */}
				<div className='farmer_product_category_card category_card-2'>
					<p className='farmer_cart_title'>Crops</p>
					<p className='farmer_cart_price'>0</p>
				</div>
				{/* card 3 */}
				<div className='farmer_product_category_card category_card-3'>
					<p className='farmer_cart_title'>Farm inputs</p>
					<p className='farmer_cart_price'>0</p>
				</div>
				{/* card 4 */}
				<div className='farmer_product_category_card category_card-4'>
					<p className='farmer_cart_title'>P/Products</p>
					<p className='farmer_cart_price'>0</p>
				</div>
				{/* card 5 */}
				<div className='farmer_product_category_card category_card-5'>
					<p className='farmer_cart_title'>Equipments</p>
					<p className='farmer_cart_price'>0</p>
				</div>
			</div>
		</>
	);
};
