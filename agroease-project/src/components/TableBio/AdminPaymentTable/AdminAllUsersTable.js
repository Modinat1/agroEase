import React from "react";
import "./AdminAllUsersTable.css";
import { adminpayment } from "./AdminPaymentModule";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import { useState } from "react";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
import { useEffect } from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

const AdminAllUsersTable = () => {
	// const { userAuth } = GeneralUserAuth();
	// const { accessToken } = userAuth;
	const [users, setUsers] = useState([]);
	const tokenInfo = localStorage.getItem("token");
	console.log(tokenInfo);

	const config = {
		headers: { Authorization: `Bearer ${tokenInfo}` },
	};

	const getAllUsers = async () => {
		try {
			const response = await axiosInstance.get(`/v1/users`, config);
			console.log(response.data);
			setUsers(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<div>
			<div className='general-table-bio-pay'>
				<div className='general-table-width-pay'>
					<table className='pay-general-table'>
						<thead className='pay-general-thead'>
							<tr className='pay-general-tr'>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Phone number</th>
								<th>Action</th>
								<th>Status</th>
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{users.map((tables) => {
							return (
								<tbody className={tables.tbcName}>
									<tr>
										<td>{tables.firstname}</td>
										<td>{tables.lastname}</td>
										<td>{tables.email}</td>
										<td>{tables.phone_number}</td>

										<td>
											<div className='styletableicon'>
												<BiEdit />
												<AiOutlinePauseCircle />
												<MdOutlineCancel />
											</div>
										</td>
										<td>
											<div className='admin-verify'>
												<button>Verify</button>
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

export default AdminAllUsersTable;
