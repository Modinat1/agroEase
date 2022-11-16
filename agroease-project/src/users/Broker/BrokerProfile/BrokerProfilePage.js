import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { BrokersProfileContent } from "./BrokerProfileId";

const BrokerProfilePage = () => {
	return (
		<div>
			{/* <BrokerSidebar />
      <BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />
			<BrokersProfileContent />
		</div>
	);
};

export default BrokerProfilePage;
