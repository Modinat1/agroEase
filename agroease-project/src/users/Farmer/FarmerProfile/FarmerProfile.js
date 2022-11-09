import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";

const FarmerProfile = () => {
	return (
		<div>
			<FarmerSidebar />
			<BrokerDashnav />
			<h1>Farmer profile</h1>
		</div>
	);
};

export default FarmerProfile;
