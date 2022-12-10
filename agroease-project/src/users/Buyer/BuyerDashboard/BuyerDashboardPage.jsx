import React from "react";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";
import NewHeroSection from "../../../pages/NewWork/NewHeroSection/NewHeroSection";
import "./BuyerDashboard.css";
import { BuyerDashCard } from "./BuyerDashCard";

export const BuyerDashboardPage = () => {
	return (
		<>
			{/* <BuyerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBuySidebar/>
			<div>
				<section className='buyer_dashboard_wrapper'>
					<section className='buyer_dash_title'>
						<h2>Buyer Dashboard </h2>
					</section>

					<BuyerDashCard />
					<NewHeroSection />
				</section>
			</div>
		</>
	);
};
