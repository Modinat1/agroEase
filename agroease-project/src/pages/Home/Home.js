import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import "./HomePage.css";
import { HomepageHeader } from "./HomePageHeader";
import { Categories } from "./Categories";
import { HomePageCard } from "./HomePageCard";
import { Broker } from "./Broker";
import { Seller } from "./SellerHome";
import { Payment } from "./Payment";

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <HomepageHeader />
      <Categories />
      <HomePageCard />
      <Broker />
      <HomePageCard />
      <Seller />
      <Payment />
    </div>
  );
};

export default Home;
