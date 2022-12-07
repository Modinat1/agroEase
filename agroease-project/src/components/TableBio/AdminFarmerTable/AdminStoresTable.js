import React, { useEffect, useState } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import "./AdminStoresTable.css";
import { MdOutlineCancel } from "react-icons/md";
import { adminpayment } from "../AdminPaymentTable/AdminPaymentModule";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import axiosInstance from "../../../Context/axios-config/axios-user-config";

const AdminStoresTable = () => {
	const { userAuth } = GeneralUserAuth();
	const { accessToken, allUser } = userAuth;
	console.log(userAuth);
	console.log(allUser);


	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	//Get store
	const [stores, setStores] = useState([]);
	const getStores = async () => {
		try {
			const response = await axiosInstance.get(`/v1/store`, config);
			console.log(response.data);
			setStores(response.data);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getStores()
	}, []);

	return (
		<div>
			<div className='general-table-bio-adfarm'>
				<div className='general-table-width-adfarm'>
					<table className='adfarm-general-table'>
						<thead className='adfarm-general-thead'>
							<tr className='adfarm-general-tr'>
								<th>Business Name</th>
								<th>Business Email</th>
								<th>Business Phone/Num</th>
								<th>Store Description</th>
								<th>Account Name</th>
								<th>Account Number</th>
								<th>Bank</th>
								<th>NIN</th>
								<th>DOB</th>
								<th>Action</th>
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{stores.map((tables) => {
							return (
								<tbody className='adfarm-general-tbody'>
									<tr>
										<td>{tables.name}</td>
										<td>{tables.business_email}</td>
										<td>{tables.phone_number}</td>
										<td>{tables.description}</td>
										<td>{tables.Wallet.account_name}</td>
										<td>{tables.Wallet.account_number}</td>
										<td>{tables.Wallet.bank}</td>
										<td>{tables.Wallet.nin}</td>
										<td>{tables.Wallet.date_of_birth}</td>
										<td>
											<div className= "styletableicon">
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
		</div>
	);
};

export default AdminStoresTable;
