import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import "./AdminProductTable.css";
import { adminpayment } from "../AdminPaymentTable/AdminPaymentModule";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import { useState } from "react";
import { useEffect } from "react";
// import axiosInstance from '../../../Context/axios-config/axios-user-config'
import axios from "axios";
import { useContext } from "react";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
// import UserAuth from '../../../Context/user-auth/UserAuthContext'

const AdminProductTable = () => {
	// const { userAuth } = GeneralUserAuth();
	// const { accessToken, allUser } = userAuth;
	// console.log(accessToken)
	// Gets all products function starts here
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

	// Verify Products starts here

	const verifyProduct = async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenInfo}`,
				"Content-Type": "multipart/form-data",
			},
		};
		const update = new FormData();
		update.append("product", JSON.stringify({ status: true }));
		update.forEach((data) => console.log(data));

		try {
			await axiosInstance.patch(`/v1/product/${id}`, update, config);

			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className='general-table-bio-adpro'>
				<div className='general-table-width-adpro'>
					<table className='adpro-general-table'>
						<thead className='adpro-general-thead'>
							<tr className='adpro-general-tr'>
								<th>Store ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Quantity</th>
								<th>Price (₦)</th>
								<th>Action</th>
								<th>Status</th>
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{allProducts.map((tables) => {
							return (
								<tbody className='adpro-general-tbody'>
									<tr>
										<td>{tables.StoreId}</td>
										<td>{tables.name}</td>
										<td>{tables.description}</td>
										<td>{tables.quantity}</td>
										<td>{tables.price}</td>
										<td>
											<div className='styletableicon'>
												<BiEdit />
												<AiOutlinePauseCircle />
												<MdOutlineCancel />
											</div>
										</td>
										<td>
											{tables.status ? (
												<div
													className='admin-verify'
													style={{ backgroundColor: "green", color: "white" }}>
													<button>Verified</button>
												</div>
											) : (
												<div className='admin-verify'>
													<button onClick={() => verifyProduct(tables.id)}>
														Verify
													</button>
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
		</div>
	);
};

export default AdminProductTable;
