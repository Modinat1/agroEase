import React from "react";
import { CurrentTaskMainCard } from "./CurrentTaskMainCard";
import "./farmerCurrentTask.css";
import { CurrentTaskSubCard } from "./CurrentTaskSubCard";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
// import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/NewFarmerSidebar";

export const FarmerCurrentTaskPage = () => {
	return (
		<>
			<NewBrokerNavbar />
			<NewFarmerSidebar />

			{/* <FarmerSidebar />
				<BrokerDashnav /> */}

			{/* <NewFarmerSidebar /> */}

			<CurrentTaskMainCard />
			{/* Uploaded section Content */}
			<div className='farmers_uploaded_product'>
				<h5>Uploaded Products</h5>
			</div>
			<CurrentTaskSubCard />
			<CurrentTaskSubCard />
			{/* <section className='farmer_current_task'></section> */}
		</>
	);
};
