import React from "react";
import NewAdminSidebar from "../../../components/dashboard-nav-and-side/AdminSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import AdminFarmerTable from "../../../components/TableBio/AdminFarmerTable/AdminFarmerTable";
import { FarmerProductCard } from "../../Farmer/farmerProduct/FarmerProductCard";
// import AdminFarmerTable from "../../../components/TableBio/AdminFarmerTable/AdminFarmerTable";

import AdminFarmerHeroPage from "./AdminFarmerCompo/AdminFarmerHeroPage";
import { AdminFarmTaskSwitch } from "./AdminFarmerCompo/AdminFarmTaskSwitch";

export const AdminFarmerAllProducts = () => {
	return (
		<div>
			<NewAdminSidebar />
			<NewBrokerNavbar />

			{/* <AdminFarmerHeroPage /> */}
			<section className='farmer_product_wrapper'>
				<div className='farmer_product_title'>
					<h3>Products</h3>
				</div>
				<FarmerProductCard />
				{/* <section className='farmer_add_product'> */}
				<AdminFarmTaskSwitch />

				<AdminFarmerTable />
				{/* </section> */}
			</section>
		</div>
	);
};
