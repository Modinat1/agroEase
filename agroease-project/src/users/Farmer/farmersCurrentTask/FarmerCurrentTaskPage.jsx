import React from "react";
import { CurrentTaskMainCard } from "./CurrentTaskMainCard";
import "./farmerCurrentTask.css";
import { CurrentTaskSubCard } from "./CurrentTaskSubCard";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import {FarmerSidebar} from "../../../components/dashboard-nav-and-side/FarmerSidebar";

export const FarmerCurrentTaskPage = () => {
	return (
		<>
			<section className='farmer_current_task'>
				<FarmerSidebar />
				<BrokerDashnav />
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