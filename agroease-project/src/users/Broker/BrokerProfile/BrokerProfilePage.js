import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
import { BrokersProfileContent } from "./BrokerProfileId";

const BrokerProfilePage = () => {
  return (
    <div>
      <BrokerSidebar />
      <BrokerDashnav />
      <BrokersProfileContent />
    </div>
  );
};

export default BrokerProfilePage;
