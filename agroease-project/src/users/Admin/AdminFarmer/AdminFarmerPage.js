import React from "react";
import NewAdminSidebar from "../../../components/dashboard-nav-and-side/AdminSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import AdminStoresTable from "../../../components/TableBio/AdminFarmerTable/AdminStoresTable";
import { FarmerProductCard } from "../../Farmer/farmerProduct/FarmerProductCard";
import { AdminFarmTaskSwitch } from "./AdminFarmerCompo/AdminFarmTaskSwitch";

const AdminFarmerPage = () => {
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

				<AdminStoresTable />
				{/* </section> */}
			</section>
		</div>
	);
};

export default AdminFarmerPage;
