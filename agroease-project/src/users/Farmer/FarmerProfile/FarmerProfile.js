import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import { FarmerSidebar } from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import { FarmerProfilePage } from "./FarmerProfilePage";

const FarmerProfile = () => {
  return (
    <div>
      <FarmerSidebar />
      <BrokerDashnav />
      <h1>Farmer profile</h1>

      <FarmerProfilePage />
    </div>
  );
};

export default FarmerProfile;
