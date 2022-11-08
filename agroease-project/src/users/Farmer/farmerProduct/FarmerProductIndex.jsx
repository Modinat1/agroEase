import React from "react";
// import { NavBar2 } from "../NavBar2";
// import { Sidebar } from "../Sidebar";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav"
import "./FarmerProduct.css";
import { FarmerProductCard } from "./FarmerProductCard";
import { FarmerTable } from "./FarmerTable";

export const FarmerProductIndex = () => {
  return (
    <>
    {/* <Sidebar />
    <Dashnav /> */}
      {/* <Sidebar /> */}
      {/* <NavBar2 /> */}
      
      <section className="farmer_product_wrapper">
        <div className="farmer_product_title">
          <h3>Products</h3>
        </div>
        <FarmerProductCard />
        {/* farmer_add_product */}
        <section className="farmer_add_product">
          <p>Crop</p>
          <button>Add Product</button>
        </section>

        <FarmerTable />
      </section>
    </>
  );
};
