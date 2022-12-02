import React from "react";

import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";

import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";

import { FarmerProfilePage } from "./FarmerProfilePage";

const FarmerProfile = () => {
	return (
		<div>
			<NewBrokerNavbar />

			<NewFarmerSidebar />

			<FarmerProfilePage />
		</div>
	);
};

export default FarmerProfile;
