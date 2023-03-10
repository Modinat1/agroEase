import React from "react";
import "./BuyerProduct.css";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";
// import NewStoreSection from "../../../pages/NewWork/NewStoreSection/NewStoreSection";
import { CurrentTaskMainCard } from "../../Farmer/farmersCurrentTask/CurrentTaskMainCard";
// import { CurrentTaskSubCard } from "../../Farmer/farmersCurrentTask/CurrentTaskSubCard";
import PaginatedBuyerProduct from "../../../pages/NewWork/NewStoreSection/NewStoreSection";

const BuyerProductPage = () => {
	return (
		<div>
			{/* <BuyerSidebar />
        <BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBuySidebar />
			<section className='buyer_dashboard_wrapper'>
				<section className='buyer_dash_title'>
					<h2 className='pl-5'>Products </h2>
				</section>
				<CurrentTaskMainCard />
				<div className='buyer_uploaded_product'>
					<h5>Current Task</h5>
				</div>
				<PaginatedBuyerProduct itemsPerPage={8} />
			</section>
		</div>
	);
};

export default BuyerProductPage;
