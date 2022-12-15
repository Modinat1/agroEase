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
import { useEffect } from "react";
import axios from "axios";
import GeneralUserAuth from "../../Context/user-auth/GeneralUserAuth";
// import { ProductProvider } from "../../Context/Store/ProductContext";

const Home = () => {
	const [search, setSearch] = useState("");

	// const { userAuth, setUserAuth} =
		// GeneralUserAuth();
	// const { accessToken } = userAuth;
	const getToken = localStorage.getItem('token')


	const config = {
		headers: { Authorization: `Bearer ${getToken}` },
	};

	const getCurrentUser = async () => {
		const currentUser = await axios
			.get(
				"https://agro-ease-backend-production.up.railway.app/v1/auth/current",
				config
			)
			.then((resp) => {
				console.log(resp.data);
				return resp;
			});
		const user = currentUser;

		console.log(user);
		localStorage.setItem("user", JSON.stringify(user));
		return user;
	};

	useEffect(() => {
		getCurrentUser();
	}, []);


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
