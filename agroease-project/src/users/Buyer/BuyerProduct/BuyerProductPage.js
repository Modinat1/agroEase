import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";


const BuyerProductPage = () => {
	return (
		<div>
			{/* <BuyerSidebar />
        <BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBuySidebar/>
			
		</div>
	);
};

export default BuyerProductPage;
