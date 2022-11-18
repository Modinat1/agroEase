import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
//  import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
// import Dashnav from '../../../components/dashboard-nav-and-side/Dashnav'
import { TaskSwitch } from "../AdminDasboardTask/AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardTask/AdminDasboardComponent.js/ManageTaskWrapper";
// import { AdminTaskTableBody } from "./AdminTaskTableBody";
// import Sidebar from '../../../components/dashboard-nav-and-side/Sidebar'
import NewAdminSidebar from "../../../components/dashboard-nav-and-side/AdminSidebar";

export const AdminTaskNotification = () => {
	return (
		<>
			{/* <Sidebar/>
        <Dashnav/> */}

			{/* <BrokerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			{/* <NewBrokerSidebar /> */}
			<NewAdminSidebar/>
			<div className='manage-task-wrapper'>
				<ManageTaskWrapper />
				<TaskSwitch />
				{/* 
				<table>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' className='table-checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Message</th>
							<th scope='col'>Status</th>
						</tr>
					</thead>

					<tbody>
						<AdminTaskTableBody />
						<AdminTaskTableBody />
						<AdminTaskTableBody />
						<AdminTaskTableBody />
					</tbody>
				</table> */}
			</div>
		</>
	);
};
