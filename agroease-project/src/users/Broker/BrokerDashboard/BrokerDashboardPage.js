import React from "react";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import { NewSideMobile } from "../../../components/dashboard-nav-and-side/NewSideMobile";
// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import AdminBrokerTable from "../../../components/TableBio/AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable";
import Brokdbcontent from "./Brokdbcontent.jsx";

const BrokerDashboardPage = () => {
	return (
		<React.Fragment>
			<NewBrokerNavbar />
			<NewSideMobile />

			{/* <NewBrokerSidebar /> */}
			<div>
				<section className='buyer_dashboard_wrapper'>
					<section className='buyer_dash_title'>
						<h2>Dashboard</h2>
					</section>

					<Brokdbcontent />
					<AdminBrokerTable />
				</section>
			</div>
		</React.Fragment>
	);
};

export default BrokerDashboardPage;
