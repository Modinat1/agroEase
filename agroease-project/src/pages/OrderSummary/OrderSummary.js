import OrderSummaryPage from "./OrderSummaryPage";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar1/Navbar1";
import React from "react";

const OrderSummary = () => {
	return (
		<React.Fragment>
			<Navbar1 />
			<OrderSummaryPage />
			<Footer />
		</React.Fragment>
	);
};

export default OrderSummary;
