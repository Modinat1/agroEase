import React from "react";

import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { BuyerDashCard } from "../../Buyer/BuyerDashboard/BuyerDashCard";
import Thebarchart from "./Thebarchart";
import Thepiechart from "./Thepiechart";
// import Farmercontent from "./Farmercontent";

const Farmerdashboard = () => {
	return (
		<React.Fragment>
			{/* <FarmerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			{/* <NewBrokerSidebar /> */}
			<NewFarmerSidebar />
			{/* <Farmercontent />  */}
			<div>
				<section className='buyer_dashboard_wrapper'>
					<section className='buyer_dash_title'>
						<h2>Dashboard </h2>
					</section>

					<BuyerDashCard />
					<div className='flex justify-between items-center'>
						<Thepiechart />
						<Thebarchart />
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default Farmerdashboard;
