import React from "react";
import "../AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable.css";
import { adminLogistics } from "./AdminManageTableModule";

const AdminLogistcisTable = () => {
	return (
		<div className='general-table-bio'>
			<div className='general-table-width'>
				<table className='admin-general-table'>
					<thead className='admin-general-thead'>
						<tr className='admin-general-tr'>
							<th>ID</th>
							<th>Account Name</th>
							<th>Account Number</th>
							<th>CCV</th>
							<th>Balance</th>
							<th>Transfer Date</th>
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
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default AdminLogistcisTable;
