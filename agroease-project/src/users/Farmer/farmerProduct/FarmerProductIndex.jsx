import "./FarmerProduct.css";

import { FarmerProductCard } from "./FarmerProductCard";
import { FarmerTable } from "./FarmerTable";
import { FarmerTableRow } from "./FarmerTableRow";
import { Link } from "react-router-dom";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewFarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import React from "react";

// import AdminSuccessPending from "../../../components/TableBio/AdminBuyerTableCompo/AdminSuccessPending";






 





// import { NavBar2 } from "../NavBar2";
// import { Sidebar } from "../Sidebar";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav"



// import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";

// import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";




export const FarmerProductIndex = () => {
	return (
		<>
			{/* <Sidebar />
    <Dashnav /> */}
			{/* <BrokerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewFarmerSidebar />

			<section className='farmer_product_wrapper'>
				<div className='farmer_product_title'>
					<h3>Products</h3>
				</div>
				<FarmerProductCard />
				{/* farmer_add_product */}
				<section className='farmer_add_product'>
					<p>Crop</p>
					<Link to={"/farmeraddproduct"}>
						<button>Add Product</button>
					</Link>
				</section>
               
				<FarmerTable />
				<FarmerTableRow/>

				{/* <AdminSuccessPending/> */}
			</section>
		</>
	);
};
