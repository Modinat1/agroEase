import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";
// import NewBuySidebar from "../../../components/dashboard-nav-and-side/NewBuySidebar";

import { BuyerProfile } from "./BuyerProfile";

const BuyerProfilePage = () => {
  return (
    <div>
      {/* <BuyerSidebar />
      <BrokerDashnav /> */}
      <NewBrokerNavbar />
      {/* <NewBrokerSidebar /> */}
      <NewBuySidebar/>
      <BuyerProfile />
    </div>
  );
};

export default BuyerProfilePage;
