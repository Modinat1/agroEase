import React from "react";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
// import AdminFarmerTable from "../../../components/TableBio/AdminFarmerTable/AdminFarmerTable";
// import AdminPaymentTable from "../../../components/TableBio/AdminPaymentTable/AdminPaymentTable";
// import AdminProductTable from "../../../components/TableBio/AdminProductTable/AdminProductTable";
import FarmerTotalcat from "../../../components/TableBio/FarmerTotalcat/FarmerTotalcat";
import UserRefreshToken from "../../../Context/user-auth/UserRefreshToken";
import userRefreshToken from "../../../Context/user-auth/UserRefreshToken";
// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { BuyerDashCard } from "../../Buyer/BuyerDashboard/BuyerDashCard";
import Thebarchart from "./Thebarchart";
import Thepiechart from "./Thepiechart";
// import Farmercontent from "./Farmercontent";

const Farmerdashboard = () => {
	const refresh = UserRefreshToken();
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
							<h1 className='font-bold'>SALES ANALYSIS</h1>
							<Thepiechart />
						</div>

						<Thebarchart />
					</div>

					<FarmerTotalcat />
					{/* <AdminProductTable /> */}
					<AdminFarmerTable />
					{/* <AdminPaymentTable /> */}
				</section>
			</div>
		</React.Fragment>
	);
};

export default Farmerdashboard;
