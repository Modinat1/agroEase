import React from "react";

export const CartDropDown = ({ prod }) => {
	return (
		<>
			<div className='absolute flex flex-col items-center'>
				<div className='flex mt-4 gap-x-2 mb-4 p-2 bg-white items-center '>
					<span style={{ width: "30px", heigth: "30px" }}>
						<img style={{ width: "100%" }} src={prod.image} alt='cartimg' />
					</span>
					<span>{prod.name}</span>

					<span>{prod.price}</span>
					<span>Delete</span>
				</div>
				<button className=' bg-green-500 text-white'>Proceed to Cart</button>
			</div>
		</>
	);
};
