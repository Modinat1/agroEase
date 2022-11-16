import React from "react";
// import { NavBar2 } from "../NavBar2";
// import { Sidebar } from "../Sidebar";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav"
import "./FarmerProduct.css";
import { FarmerProductCard } from "./FarmerProductCard";
import { FarmerTable } from "./FarmerTable";
import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";

export const FarmerProductIndex = () => {
	return (
		<>
			{/* <Sidebar />
    <Dashnav /> */}
			{/* <BrokerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />

			<section className='farmer_product_wrapper'>
				<div className='farmer_product_title'>
					<h3>Products</h3>
				</div>
				<FarmerProductCard />
				{/* farmer_add_product */}
				<section className='farmer_add_product'>
					<p>Crop</p>
					<button>Add Product</button>
				</section>

				<FarmerTable />
			</section>
		</>
	);
};
