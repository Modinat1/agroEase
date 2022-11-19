import React from "react";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
// import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
import { BuyerProfile } from "./BuyerProfile";

const BuyerProfilePage = () => {
  return (
    <div>
      {/* <BuyerSidebar />
      <BrokerDashnav /> */}
      <NewBrokerNavbar />
      <NewBrokerSidebar />
      <BuyerProfile />
    </div>
  );
};

export default BuyerProfilePage;
