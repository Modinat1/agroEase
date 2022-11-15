import React from "react";
import BrokerDashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
import BrokerSidebar from "../../../../components/dashboard-nav-and-side/BrokerSidebar";
import AdminSuccessPending from "../../../../components/TableBio/AdminBuyerTableCompo/AdminSuccessPending";
// import { AdminPaymentTable } from "../../../../components/TableBio/AdminPaymentTable/AdminPaymentTable";

import { TaskSwitch } from "../AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardComponent.js/ManageTaskWrapper";

export const AdminPaymentTask = () => {
	return (
		<>
			<BrokerSidebar />
			<BrokerDashnav />

			<div className='manage-task-wrapper'>
				<ManageTaskWrapper />
				<TaskSwitch />
				<AdminSuccessPending />
				{/* <AdminPaymentTable /> */}
			</div>
			{/* <AdminTaskNotification/> */}
		</>
	);
};
