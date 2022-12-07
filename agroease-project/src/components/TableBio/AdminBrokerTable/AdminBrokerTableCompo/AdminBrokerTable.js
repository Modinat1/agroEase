import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import axiosInstance from "../../../../Context/axios-config/axios-user-config";
import GeneralUserAuth from "../../../../Context/user-auth/GeneralUserAuth";
import UserAuth from "../../../../Context/user-auth/UserAuthContext";
import { adminbroker } from "./AdminBrokerModule";
import "./AdminBrokerTable.css";

const AdminBrokerTable = () => {
	const { userAuth } = GeneralUserAuth();
	const { accessToken, allUser } = userAuth;
	console.log(userAuth);
	console.log(allUser);
	const {
		Store: { id },
	} = allUser;
	const [products, setProducts] = useState([]);

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	const getProduct = async () => {
		try {
			const response = await axiosInstance.get(
				`v1/product/store/${id}`,
				config
			);
			console.log(response.data);
			setProducts(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const deleteProduct = async () => {
		try {
			const response = await axiosInstance.delete(
				"v1/product/:productId",
				config
			);
			console.log(response.data);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getProduct();
	}, []);

	return (
		<div className='general-table-bio'>
			<div className='general-table-width'>
				<table className='admin-general-table'>
					<thead className='admin-general-thead'>
						<tr className='admin-general-tr'>
							<th>S/N</th>
							<th>Name of Product</th>
							{/* <th>Categories</th> */}
							<th>Product Description</th>
							<th>Unit Cost/Item</th>
							<th>Qty of item</th>
							<th>Action</th>
						</tr>
					</thead>

					{/* Mapping through the array to get the table details */}

					{products.map((tables) => {
						const { id, name, description, price, quantity } = tables;
						return (
							<tbody className='admin-general-tbody' key={id}>
								<tr>
									<td>{id}</td>
									<td>{name}</td>
									<td>{description}</td>
									<td>{price}</td>
									<td>{quantity}</td>
									{/* <td>{tables.address}</td> */}
									<td>
										<div className='styletableicon'>
											<BiEdit />
											<AiOutlinePauseCircle />
											<MdOutlineCancel onClick={(id) => deleteProduct(id)} />
										</div>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default AdminBrokerTable;
