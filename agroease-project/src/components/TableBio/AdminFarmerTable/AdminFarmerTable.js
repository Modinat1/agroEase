import React, { useEffect, useState } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import "./AdminFarmerTable.css";
import { MdOutlineCancel } from "react-icons/md";
import { adminpayment } from "../AdminPaymentTable/AdminPaymentModule";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import axiosInstance from "../../../Context/axios-config/axios-user-config";

const AdminFarmerTable = () => {
	const { userAuth } = GeneralUserAuth();
	const { accessToken, allUser } = userAuth;
	console.log(userAuth);
	console.log(allUser);

	// Gets all products function starts here
	const [allProducts, setallProducts] = useState([]);

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
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

	// Get all products function ends here

	// Get all users function starts here
	const getAllUsers = async () => {
		try {
			const response = await axiosInstance.get(`v1/users`, config);
			console.log(response.data);
			setallProducts(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProduct();
		getAllUsers();
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

						{adminpayment.map((tables) => {
							return (
								<tbody className='adfarm-general-tbody'>
									<tr>
										<td>{tables.id}</td>
										<td>{tables.acctName}</td>
										<td>{tables.acctNumber}</td>
										<td>{tables.ccv}</td>
										<td>{tables.balance}</td>
										<td>{tables.dateTransfer}</td>
										<td>{tables.transaction}</td>
										<td>{tables.status}</td>
										<td>{tables.status}</td>
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
		</div>
	);
};

export default AdminFarmerTable;
