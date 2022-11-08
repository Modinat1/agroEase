import React from "react";
import { Link } from "react-router-dom";
import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";
import FarmerSidebar from "../../../components/dashboard-nav-and-side/FarmerSidebar";
import "./FarmerProduct.css";
import { FarmerProductCard } from "./FarmerProductCard";
import { FarmerTable } from "./FarmerTable";

export const FarmerProductPage = () => {
  return (
    <>
   
        <FarmerSidebar /> 
        <BrokerDashnav />
        
      <section className="farmer_product_wrapper">
        <div className="farmer_product_title">
          <h3>Products</h3>
        </div>
        <FarmerProductCard />
        {/* farmer_add_product */}
        <section className="farmer_add_product">
          <p>Crop</p>
          <Link to='/farmeraddproduct'><button>Add Product</button></Link>
        </section>

        <FarmerTable />
      </section>
    </>
  );
};
