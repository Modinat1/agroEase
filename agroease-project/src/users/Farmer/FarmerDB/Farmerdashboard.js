import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import Farmercontent from "./Farmercontent";

const Farmerdashboard = () => {
	return (
		<React.Fragment>
			<FarmerSidebar />
			<BrokerDashnav />
			<Farmercontent />
		</React.Fragment>
	);
};

export default Farmerdashboard;
