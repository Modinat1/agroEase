import React from "react";
import NewAdminSidebar from "../../../components/dashboard-nav-and-side/AdminSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import AdminAllUsersTable from "../../../components/TableBio/AdminPaymentTable/AdminAllUsersTable";

import { FarmerProductCard } from "../../Farmer/farmerProduct/FarmerProductCard";

import { AdminBuyerTaskSwitch } from "./AdminBuyerComponent/AdminBuyerTaskSwitch";

export const AdminBuyerAllUsers = () => {
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
				<AdminBuyerTaskSwitch />

				<AdminAllUsersTable/>
				{/* </section> */}
			</section>
		</div>
	);
};
