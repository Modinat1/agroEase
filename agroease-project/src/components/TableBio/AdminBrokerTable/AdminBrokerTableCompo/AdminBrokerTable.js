import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import axiosInstance from "../../../../axios-config/axios-user-config";
import UserAuth from "../../../../Context/user-auth/UserAuthContext";
import { adminbroker } from "./AdminBrokerModule";
import "./AdminBrokerTable.css";

const AdminBrokerTable = () => {
	const { userAuth, setUserAuth, user, setUser } = useContext(UserAuth);
	const { accessToken, refreshToken } = userAuth;
	const [products, setProducts] = useState([]);

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	const getProduct = async () => {
		try {
			const response = await axiosInstance.get("/v1/product/", config);
			console.log(response.data);
			setProducts(response.data);
			// .then((response) => {
			// 	const collectedData = response.data;
			// 	console.log(collectedData);
			// 	return collectedData;
			// });
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
						return (
							<tbody className={tables.tbcName}>
								<tr>
									<td>{tables.id}</td>
									<td>{tables.name}</td>
									<td>{tables.description}</td>
									<td>{tables.cost}</td>
									<td>{tables.quantity}</td>
									{/* <td>{tables.address}</td> */}
									<td>
										<div className={tables.tbcIcon}>
											<BiEdit />
											<AiOutlinePauseCircle />
											<MdOutlineCancel />
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
