import React, { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
import "./AdminDashCard.css";

export const AdminDashCard = () => {
	const [allProducts, setallProducts] = useState([]);

	const tokenInfo = localStorage.getItem("token");

	console.log(tokenInfo);

	const config = {
		headers: { Authorization: `Bearer ${tokenInfo}` },
	};

	const getAllProduct = async () => {
		try {
			const response = await axiosInstance.get(`v1/product/admin`, config);
			console.log(response.data);
			setallProducts(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProduct();
	}, []);

	return (
		<div>
			<div className='admin_summary_card_wrapper'>
				{/* card 1 */}
				<div className='farmer_product_category_card admin_active farmer_admin_card-1'>
					<p className='farmer_admin_title'>Total Product</p>
					<p className='farmer_admin_price'>{allProducts.length + 1}</p>
				</div>
				{/* card 2 */}
				<div className='farmer_product_category_card farmer_admin_card-2'>
					<p className='farmer_admin_title'>Sold Product</p>
					<p className='farmer_admin_price'>0</p>
				</div>
				{/* card 3 */}
				<div className='farmer_product_category_card farmer_admin_card-3'>
					<p className='farmer_admin_title'>Total revenue</p>
					<p className='farmer_admin_price'>0.00</p>
				</div>
				{/* card 4 */}
				<div className='farmer_product_category_card farmer_admin_card-4'>
					<p className='farmer_admin_title'>Pending</p>
					<p className='farmer_admin_price'>0</p>
				</div>
			</div>
		</div>
	);
};
