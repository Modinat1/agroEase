import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
import { BuyerProfile } from "./BuyerProfile";

const BuyerProfilePage = () => {
  return (
    <div>
      <BuyerSidebar />
      <BrokerDashnav />
      <BuyerProfile />
    </div>
  );
};

export default BuyerProfilePage;
