import React from "react";

import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";

import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import FarmerFinishProfile from "../FarmerFinishProfile/FarmerFinishProfile";


const FarmerProfile = () => {
	return (
		<div>
			<NewBrokerNavbar />
			<NewFarmerSidebar />
			<FarmerFinishProfile />
		</div>
	);
};

export default FarmerProfile;
