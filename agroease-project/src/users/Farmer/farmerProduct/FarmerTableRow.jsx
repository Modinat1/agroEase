import React from "react";
import "./FarmerTable.css";

export const FarmerTableRow = () => {
	return (
		<>
			<tr>
				<td className='id_container farmer_product_data'>
					<input type='checkbox' name='checkbox' id />
					<span>7587</span>{" "}
				</td>
				<td className='farmer_product_data'>Fulani Chicken</td>
				<td className='farmer_product_data'>Fulani Breed</td>
				<td className='farmer_product_data'>3</td>
				<td className='farmer_product_data'>This is a Local breed fowl</td>
				<td className='farmer_product_data'>500.00</td>
				<td className='farmer_product_data'>
					<div>
						<button className='farm_product_btn_icon'>
							<i className='fa-solid fa-pen-to-square' />
						</button>
						<button className='farm_product_btn_icon'>
							<i className='fa-solid fa-circle-pause' />
						</button>
						<button className='farm_product_btn_icon'>
							<i className='fa-solid fa-xmark' />
						</button>
					</div>
				</td>
			</tr>
		</>
	);
};
