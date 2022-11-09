import React from "react";
import BrokerDashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
import BrokerSidebar from "../../../../components/dashboard-nav-and-side/BrokerSidebar";
// import Dashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
// import Sidebar from "../../../../components/dashboard-nav-and-side/BrokerSidebar";
import { TaskSwitch } from "../AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardComponent.js/ManageTaskWrapper";
// import { AdminTaskNotification } from "../../AdminTaskNotification/AdminTaskNotification";

import { TableBody } from "../AdminDasboardComponent.js/TableBody";
import "./AdminPaymentTask.css";

export const AdminPaymentTask = () => {
	return (
		<>
			<BrokerSidebar />
			<BrokerDashnav />

			<div className='manage-task-wrapper'>
				<ManageTaskWrapper />
				<TaskSwitch />

				<table>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' className='table-checkbox' />
							</th>
							<th scope='col'>Name</th>
							<th scope='col'>Account</th>
							<th scope='col'>CVV</th>
							<th scope='col'>Balance</th>
							<th scope='col'>Transfer Date</th>
							<th scope='col'>Transaction</th>
							<th scope='col'>Status</th>
							<th scope='col'>Action</th>
						</tr>
					</thead>

					<tbody>
						<TableBody />
						<TableBody />
						<TableBody />
						<TableBody />
					</tbody>
				</table>
			</div>
			{/* <AdminTaskNotification/> */}
		</>
	);
};