import React, { useState } from 'react';
import "./FarmerTable.css";
import jsonData from "../FarmerProductUpload.js/data.json"
import { FarmerProductUpload } from '../FarmerProductUpload.js/FarmerProductUpload';
// import { FarmerTableRow } from "./FarmerTableRow";

export const FarmerTable = () => {
	const [farmerUploadData, setFarmerUploadData] = useState(jsonData);
	const tableRows = farmerUploadData.map((info) => {
		
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.productName}</td>
        <td>{info.productType}</td>
				<td>{info.unitInput}</td>
        <td>{info.unitCost}</td>
        <td>{info.productDesc}</td>
				<td>{info.productFile}</td>
      </tr>
    );
  });

	const addRows = (data) => {
    const totalFarmerUpload = farmerUploadData.length;
    data.id = totalFarmerUpload + 1;
    const updatedFarmerUploadData = [...farmerUploadData];
    updatedFarmerUploadData.push(data);
    setFarmerUploadData(updatedFarmerUploadData);
  };

	return (
		<>
		<div className='farmers_product_table_wrapper'>
      <table className='farmer_product_table'>
        <thead>
				<tr className='farmer_product_table_header'>
							<th className='farmer_product_th'>
								<input type='checkbox' name='checkbox' defaultChecked id />
								<span>ID</span>
							</th>
							<th className='farmer_product_th'>Name of Product</th>
							<th className='farmer_product_th'>Type of Product</th>
							<th className='farmer_product_th'>Default Unit</th>
							<th className='farmer_product_th'>Product Description</th>
							<th className='farmer_product_th'>Unit cost/item</th>
							<th className='farmer_product_th'>Action</th>
						</tr>
         
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
			{/* <FarmerProductUpload func={addRows} /> */}
      
    </div>


			{/* Farmers product table */}
			{/* <section className='farmers_product_table_wrapper'>
				
			</section> */}


			{/* <table className='farmer_product_table'> */}
					{/* table row head */}
					{/* <tbody> */}
						{/* <tr className='farmer_product_table_header'>
							<th className='farmer_product_th'>
								<input type='checkbox' name='checkbox' defaultChecked id />
								<span>ID</span>
							</th>
							<th className='farmer_product_th'>Name of Product</th>
							<th className='farmer_product_th'>Type of Product</th>
							<th className='farmer_product_th'>Default Unit</th>
							<th className='farmer_product_th'>Product Description</th>
							<th className='farmer_product_th'>Unit cost/item</th>
							<th className='farmer_product_th'>Action</th>
						</tr> */}
						{/* table row 1 */}
						{/* <FarmerTableRow /> */}
						{/* <FarmerTableRow /> */}
						{/* <FarmerTableRow /> */}
						{/* <FarmerTableRow /> */}
						{/* <FarmerTableRow /> */}
					{/* </tbody> */}
				{/* </table> */}

		</>
	);
};
