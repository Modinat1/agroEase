import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import "../AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable.css";
import { adminSuccessTable } from "./AdminSuccessModule";
import { adminLogistics } from "./AdminSuccessModule";

const AdminSuccessPending = () => {
	return (
		<div className='general-table-bio'>
			<div className='general-table-width'>
				<table className='admin-general-table'>
					<thead className='admin-general-thead'>
						<tr className='admin-general-tr'>
							{/* <th>Id</th>
							<th>Name of Product</th>
							<th>Default Unit</th>
							<th>Product Discription</th>
							<th>Unit Cost/Item</th>
							<th>Action</th> */}
							<th>ID</th>
							<th>Account Name</th>
							<th>Account Number</th>
							<th>CCV</th>
							<th>Balance</th>
							<th>Transfer Date</th>
							<th>Transaction</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					{/* Mapping through the array to get the table details */}

					{adminLogistics.map((tables) => {
						return (
							<tbody className={tables.tbcName}>
								<tr>
									<td>{tables.id}</td>
									<td>{tables.name}</td>
									<td>{tables.account}</td>
									<td>{tables.ccv}</td>
									<td>{tables.balance}</td>
									<td>{tables.date}</td>
									<td>{tables.status}</td>
									<td>{tables.action}</td>
									{/* <td>{tables.id}</td>
									<td>{tables.nameOfProduct}</td>
									<td>{tables.defualtUnit}</td>
									<td>{tables.productDiscript}</td>
									<td>{tables.costItem}</td>
									<td>
										<div className={tables.tbcIcon}>
											<BiEdit />
											<AiOutlinePauseCircle />
											<MdOutlineCancel />
										</div>
									</td> */}
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default AdminSuccessPending;
