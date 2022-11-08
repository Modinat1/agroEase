import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import FarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import { FarmerProductUpload } from "./FarmerProductUpload";

export const FarmerAddProduct = () => {
	return (
		<>
			<FarmerSidebar />
			<BrokerDashnav />
			<FarmerProductUpload />
		</>
	);
};
