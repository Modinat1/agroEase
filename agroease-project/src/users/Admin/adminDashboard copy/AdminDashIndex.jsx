import React from "react";

import { AdminDashCard } from "./AdminDashCard";
import WeatherImg from "../../../images/farmer_img_circle.png";
import CloudImg from "../../../images/farmer_cloud_img.png";
import "./AdminDashIndex.css";
// import { FarmerTable } from "../farmerProduct/FarmerTable";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav";
import { FarmerTable } from "../../Farmer/farmerProduct/FarmerTable";

export const AdminDashIndex = () => {
  return (
    <div>
      {/* <Sidebar />
      <Dashnav /> */}
      <div>
        <section className="admin_dashboard_wrapper">
          <section className="admin_dash_title">
            <h2>Dashboard</h2>
          </section>
          <section className="admin_dash_summary">
            <section className="today_weather_card_container">
              <h4>Today</h4>
              <AdminDashCard />
            </section>
            {/* Admin Weather Container */}
            <section className="admin_weather_container">
              <p className="weather_report">Weather Report</p>
              <div className="weather_img">
                <img src={WeatherImg} alt="weather img" id="weather_circle" />
                <img src={CloudImg} alt="cloud icon" id="weather_cloud_icon" />
              </div>
              <p>
                Today:
                <span>
                  29 <sup> ℃ </sup>
                </span>
              </p>
            </section>
          </section>
          {/* farmer_add_product */}
          <section className="admin_recent_upload">
            <p>Recent Upload</p>
          </section>
          {/* <FarmerTable /> */}
          <FarmerTable />
        </section>
      </div>
    </div>
  );
};
