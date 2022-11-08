import React from "react";
import { CurrentTaskMainCard } from "./CurrentTaskMainCard";
// import { Sidebar } from "../Sidebar";
// import { NavBar2 } from "../NavBar2";
import "./farmerCurrentTask.css";
import { CurrentTaskSubCard } from "./CurrentTaskSubCard";
import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav";

export const FarmIndex = () => {
	return (
		<>
			<section className='farmer_current_task'>
				{/* <Sidebar />
        <Dashnav /> */}
				<BrokerSidebar />
				<BrokerDashnav />

				{/* <Sidebar />
        <NavBar2 /> */}
				<CurrentTaskMainCard />
				{/* Uploaded section Content */}
				<div className='farmers_uploaded_product'>
					<h5>Uploaded Products</h5>
				</div>
				<CurrentTaskSubCard />
				<CurrentTaskSubCard />
			</section>
		</>
	);
};
