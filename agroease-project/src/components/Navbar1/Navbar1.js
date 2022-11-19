import React from "react";
import "./Navbar1.css";
import AgroEaseLogo from "./Navbar1Component/AgroEaseLogo";
import Navbar1MenuList from "./Navbar1Component/Navbar1MenuList";
import Navbar2SearchButton from "./Navbar1Component/Navbar2SearchButton";
import Navbar2SearchInput from "./Navbar1Component/Navbar2SearchInput";
import { GrCart } from "react-icons/gr";

const Navbar1 = () => {
	return (
		<div className='navbar1-style md:container md:mx-auto max-widss'>
			<AgroEaseLogo />
			<section className='navbar-input-menu'>
				<div className='navbar-input-button'>
					<Navbar2SearchInput />
					{/* <GrCart className='font' /> */}
					{/* <Navbar2SearchButton /> */}
				</div>
				<Navbar1MenuList />
			</section>
		</div>
	);
};

export default Navbar1;
