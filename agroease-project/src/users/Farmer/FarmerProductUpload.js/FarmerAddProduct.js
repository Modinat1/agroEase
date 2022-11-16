import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { FarmerProductUpload } from "./FarmerProductUpload";

export const FarmerAddProduct = () => {
	return (
		<>
			{/* <FarmerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />
			<FarmerProductUpload />
		</>
	);
};
