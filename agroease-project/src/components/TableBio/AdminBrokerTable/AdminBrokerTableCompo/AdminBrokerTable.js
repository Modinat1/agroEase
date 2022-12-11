import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import axiosInstance from "../../../../Context/axios-config/axios-user-config";
import GeneralUserAuth from "../../../../Context/user-auth/GeneralUserAuth";
import UserAuth from "../../../../Context/user-auth/UserAuthContext";
import { FarmerProductUpdate } from "../FarmerProductUpdate";
import { adminbroker } from "./AdminBrokerModule";
import "./AdminBrokerTable.css";

const AdminBrokerTable = () => {
	const { userAuth } = GeneralUserAuth();
	const [updateMode, setUpdateMode] = useState(false);
	// const { accessToken, allUser } = userAuth;
	// console.log(userAuth);
	// console.log(allUser);

	const allUser = JSON.parse(localStorage.getItem("loginUserInfo")) || [];
	console.log(allUser);

	const userInfo = JSON.parse(localStorage.getItem("user"));
	console.log(userInfo);
	const {
		Store: { id },
	} = allUser;
	const [products, setProducts] = useState([]);
	const accessToken = localStorage.getItem("token");

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

	const deleteProduct = async (id) => {
		try {
			const response = await axiosInstance.delete(`v1/product/${id}`, config);
			console.log(response.data);
			window.location.reload();
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	// const editProduct = async (id) => {
	// 	const productUpdate = {};
	// 	try {
	// 		const response = await axiosInstance.patch(`v1/product/${id}`, config);
	// 	} catch (error) {}
	// };

	const handleUpdateProduct = () => {
		console.log("I was clicked");
		setUpdateMode(!updateMode);
		console.log(updateMode);
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			{!updateMode ? (
				<FarmerProductUpdate setUpdateMode={setUpdateMode} id={id} />
			) : (
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
									<th>Status</th>
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
													<BiEdit onClick={() => handleUpdateProduct(id)} />
													<AiOutlinePauseCircle />
													<MdOutlineCancel onClick={() => deleteProduct(id)} />
												</div>
											</td>
											<td>
												{tables.status ? (
													<div
														className='admin-verify'
														style={{
															backgroundColor: "green",
															color: "white",
														}}>
														<button>Verified</button>
													</div>
												) : (
													<div className='admin-verify'>
														<button>Pending</button>
													</div>
												)}
											</td>
										</tr>
									</tbody>
								);
							})}
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default AdminBrokerTable;
