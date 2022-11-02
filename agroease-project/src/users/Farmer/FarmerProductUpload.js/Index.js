import React from "react";
import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav";
import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
import { FarmerProductUpload } from "./FarmerProductUpload";

export const Index = () => {
	return (
		<>
			<Sidebar />
			<Dashnav />
			<FarmerProductUpload />
		</>
	);
};
