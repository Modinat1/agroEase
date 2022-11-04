import React from "react";
import Dashnav from "../../../../components/dashboard-nav-and-side/Dashnav";
import Sidebar from "../../../../components/dashboard-nav-and-side/Sidebar";
import { TaskSwitch } from "../AdminDasboardComponent.js/ManageTaskSwitch";
import { ManageTaskWrapper } from "../AdminDasboardComponent.js/ManageTaskWrapper";
import "./AdminLogisticsTask.css";

export const AdminLogisticsTask = () => {
	return (
		<>
			<Sidebar />
			<Dashnav />
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
							{/* <img src={Rectangle} alt='' /> */}
						</div>
					</div>
					<div className='history-route-container'>
						<div className='logistics-routes'>
							<div className='route-container'>
								<h5 className='route-header'>Routes</h5>
								<p className='route-text'>NOW ON THE WAY</p>
							</div>
						</div>
						<div className='logistics-history'>
							<div className='route-container'>
								<h5 className='route-header'>History</h5>
								<p className='route-text'>PRODUCT HISTORY</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
