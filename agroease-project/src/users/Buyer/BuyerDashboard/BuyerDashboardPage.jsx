import React from "react";
//import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
// import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import { Sidebar } from "../Sidebar";
// import { NavBar2 } from "../NavBar2";
import "./BuyerDashboard.css";
import { BuyerDashCard } from "./BuyerDashCard";

export const BuyerDashboardPage = () => {
	return (
		<>
			{/* <BuyerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />
			<div>
				<section className='buyer_dashboard_wrapper'>
					<section className='buyer_dash_title'>
						<h2>Buyer Dashboard </h2>
					</section>

					<BuyerDashCard />
				</section>
			</div>
		</>
	);
};
