import React from "react";
import { useNavigate } from "react-router-dom";

export const PaywithFlutterwaves = () => {
	const url = localStorage.getItem("key");
	// const navigate = useNavigate();

	// const handlePay = () => {
	// 	navigate(url);
	// };
	return (
		<div className='flex items-center justify-center'>
			<button className='bg-green-500  text-white text-xl text-center'>
				<a href={url}>Continue Shopping</a>
			</button>
		</div>
	);
};
