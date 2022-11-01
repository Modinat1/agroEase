import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import "./HomePage.css";
import { HomepageHeader } from "./HomePageHeader";
import { Categories } from "./Categories";
import PaginatedItems from "./HomePageCard";
import { Broker } from "./Broker";
import { TopPicks } from "./TopPicks";
import { Seller } from "./SellerHome";
import { Payment } from "./Payment";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <HomepageHeader />
      <Categories />
      <PaginatedItems itemsPerPage={6} />
      <Broker />
      <TopPicks />
      <Seller />
      <Payment />
      <Footer />
    </div>
  );
};

export default Home;
