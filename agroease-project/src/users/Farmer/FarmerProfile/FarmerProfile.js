import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { FarmerProfilePage } from "./FarmerProfilePage";

const FarmerProfile = () => {
	return (
		<div>
			{/* <FarmerSidebar />
      <BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />

			<FarmerProfilePage />
		</div>
	);
};

export default FarmerProfile;
