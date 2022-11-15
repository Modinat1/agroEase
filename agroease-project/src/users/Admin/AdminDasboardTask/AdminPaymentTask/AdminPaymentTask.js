import React from "react";
import NewBrokerNavbar from "../../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../../components/dashboard-nav-and-side/NewBrokerSidebar";
// import BrokerDashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BrokerSidebar from "../../../../components/dashboard-nav-and-side/BrokerSidebar";
import AdminSuccessPending from "../../../../components/TableBio/AdminBuyerTableCompo/AdminSuccessPending";
// import { AdminPaymentTable } from "../../../../components/TableBio/AdminPaymentTable/AdminPaymentTable";

import { TaskSwitch } from "../AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardComponent.js/ManageTaskWrapper";

export const AdminPaymentTask = () => {
	return (
		<>
			{/* <BrokerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />

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
