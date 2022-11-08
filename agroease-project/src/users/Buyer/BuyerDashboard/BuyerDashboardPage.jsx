import React from "react";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import BuyerSidebar from "../../../components/dashboard-nav-and-side/BuyerSidebar";
// import { Sidebar } from "../Sidebar";
// import { NavBar2 } from "../NavBar2";
import "./BuyerDashboard.css";
import { BuyerDashCard } from "./BuyerDashCard";

export const BuyerDashboardPage = () => {
  return (
    <>
      <BuyerSidebar />
      <BrokerDashnav />
      <div>
      <section className="buyer_dashboard_wrapper">
        <section className="buyer_dash_title">
          <h2>Dashboard</h2>
        </section>

        <BuyerDashCard />
      </section>
      </div>
    </>
  );
};
