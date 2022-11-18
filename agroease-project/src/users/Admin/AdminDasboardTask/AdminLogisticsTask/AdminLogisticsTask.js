import React from "react";
import NewAdminSidebar from "../../../../components/dashboard-nav-and-side/AdminSidebar";
// import Dashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
// import Sidebar from "../../../../components/dashboard-nav-and-side/BrokerSidebar";
import { TaskSwitch } from "../AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardComponent.js/ManageTaskWrapper";
import Bus from "../../../../images/Bus.png";
import googleMap from "../../../../images/googleMap.png";
import "./AdminLogisticsTask.css";
import NewBrokerNavbar from "../../../../components/dashboard-nav-and-side/NewBrokerNavbar";
// import NewBrokerSidebar from "../../../../components/dashboard-nav-and-side/NewBrokerSidebar";
// import { BuyerProductCard } from "../../../Buyer/BuyerProduct/BuyerProductCard";
// import BrokerDashnav from "../../../../components/dashboard-nav-and-side/BrokerDashnav";
// import { AdminSidebar } from "../../../../components/dashboard-nav-and-side/AdminSidebar";
// import { AdminLogisticsTable } from "../../../../components/TableBio/AdminLogisticsTable/AdminLogisticsTable";
// import { AdminLogisticsTableSub } from "../../../../components/TableBio/AdminLogisticsTable/AdminLogisticsTableSub";

export const AdminLogisticsTask = () => {
	return (
		<>
			{/* <AdminSidebar /> */}
			{/* <BrokerDashnav /> */}
			<NewBrokerNavbar />
			{/* <NewBrokerSidebar /> */}
			<NewAdminSidebar/>

			<div className='manage-task-wrapper'>
				<ManageTaskWrapper />
				<TaskSwitch />
				<div className='logistics-wrapper'>
					<div className='logistics-bus'>
						<div className='bus-details'>
							<h3 className='bus-header'>SharpMove Transport</h3>
							<div className='bus-payload'>
								<div className='payload'>
									<h5>Payload</h5>
									<p>5000naira</p>
								</div>
								<div className='payload'>
									<h5>Load Volume</h5>
									<p>353,973 In3</p>
								</div>
							</div>

							<div className='bus-payload'>
								<div className='payload'>
									<h5>Load Length</h5>
									<p>117 In</p>
								</div>
								<div className='payload'>
									<h5>Load Width</h5>
									<p>67 In3</p>
								</div>
							</div>
						</div>
						<div className='bus-image'>
							<img src={Bus} alt='' />
						</div>
						{/* <PlateNumber /> */}
					</div>
					<div className='history-route-container'>
						<div className='logistics-routes'>
							<div className='route-container'>
								<h5 className='route-header'>Routes</h5>
								<p className='route-text'>NOW ON THE WAY</p>
							</div>
							<div className='route-details'>
								<h4 className='route-id'>ID-345-745-87 packages</h4>
								<p className='route-update'>Ojuelegba, Lagos- Wuse 2, Abuja</p>
							</div>
							<div className='route-update-display'>
								<img src={googleMap} alt='googleMap' />
							</div>

							{/* <AdminLogisticsTableSub /> */}
						</div>
						<div className='logistics-history'>
							<div className='route-container'>
								<h5 className='route-header'>History</h5>
								<p className='route-text'>PRODUCT HISTORY</p>
							</div>

							{/* <AdminLogisticsTable /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
