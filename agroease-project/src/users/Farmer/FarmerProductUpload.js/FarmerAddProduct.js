import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
// import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
// import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/NewFarmerSidebar";
import { FarmerProductUpload } from "./FarmerProductUpload";

export const FarmerAddProduct = () => {
	return (
		<>
			{/* <FarmerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			{/* <NewBrokerSidebar /> */}
			{/* <NewFarmerSidebar /> */}
			<NewFarmerSidebar />
			<FarmerProductUpload />
		</>
	);
};
