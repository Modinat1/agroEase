import React from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import "./HomePage.css";
import "./HomeResponsiveness.css";
import { HomepageHeader } from "./HomePageHeader";
import { Categories } from "./Categories";
import PaginatedItems from "./HomePageCard";
import { Broker } from "./Broker";
import { TopPicks } from "./TopPicks";
import { Seller } from "./SellerHome";
import { Payment } from "./Payment";
import Footer from "../../components/Footer/Footer";
import { ProductProvider } from "../../Context/Store/productContext";


const Home = () => {
  return (
    <>

      <Navbar1 />
      <HomepageHeader />
      <ProductProvider>
      <Categories />
      <PaginatedItems itemsPerPage={6} />
    </ProductProvider>
      <Broker />
      <TopPicks />
      <Seller />
      <Payment />
      <Footer />
  
    </>
  );
};

export default Home;
