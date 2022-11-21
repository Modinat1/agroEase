import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";
import { CurrentTaskMainCard } from "../../Farmer/farmersCurrentTask/CurrentTaskMainCard";
import { CurrentTaskSubCard } from "../../Farmer/farmersCurrentTask/CurrentTaskSubCard";

const BuyerProductPage = () => {
	return (
		<div>
			{/* <BuyerSidebar />
        <BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBuySidebar />
			<CurrentTaskMainCard />
			<div className='farmers_uploaded_product'>
				<h5>Current Task</h5>
			</div>
			<CurrentTaskSubCard />
			<CurrentTaskSubCard />
		</div>
	);
};

export default BuyerProductPage;
