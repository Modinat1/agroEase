import React from "react";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import AdminPaymentTable from "../../../components/TableBio/AdminPaymentTable/AdminPaymentTable";
import FarmerTotalcat from "../../../components/TableBio/FarmerTotalcat/FarmerTotalcat";
import userRefreshToken from "../../../Context/user-auth/userRefreshToken";
// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { BuyerDashCard } from "../../Buyer/BuyerDashboard/BuyerDashCard";
import Thebarchart from "./Thebarchart";
import Thepiechart from "./Thepiechart";
// import Farmercontent from "./Farmercontent";

const Farmerdashboard = () => {

	const refresh = userRefreshToken()
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
						<div>
							<h1 className="font-bold">SALES ANALYSIS</h1>
							<Thepiechart />
						</div>

						<Thebarchart />
						
					</div>
					
					<FarmerTotalcat />
					<AdminPaymentTable  />
				</section>
			</div>
		</React.Fragment>
	);
};

export default Farmerdashboard;
