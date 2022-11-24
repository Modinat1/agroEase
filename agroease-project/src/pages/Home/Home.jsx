import React, { useState } from "react";
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
// import { ProductProvider } from "../../Context/Store/ProductContext";

const Home = () => {
	const [search, setSearch] = useState("");
	return (
		<>
			<Navbar1 search={search} setSearch={setSearch} />
			<HomepageHeader />

			<Categories />
			<PaginatedItems search={search} setSearch={setSearch} itemsPerPage={6} />

			<Broker />
			<TopPicks />
			<Seller />
			<Payment />
			<Footer />
		</>
	);
};

export default Home;
