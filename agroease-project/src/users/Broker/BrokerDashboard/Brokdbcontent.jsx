import React from "react";
import Thelinechart from "./Thelinechart";
import "./Brokerdb.css";
import BrokerDashboardCard from "./BrokerDashboardCard";
import BrokerDashWeather from "./BrokerDashWeather";

const Brokdbcontent = () => {
	return (
		<React.Fragment>
			<div className='flex gap-x-6 items-center'>
				<BrokerDashboardCard />
				<BrokerDashWeather />
			</div>
			<div className='activity'>
				<Thelinechart />
			</div>
		</React.Fragment>
	);
};

export default Brokdbcontent;
