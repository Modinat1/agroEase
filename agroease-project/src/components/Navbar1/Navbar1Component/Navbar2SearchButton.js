import React from "react";
import "./NavbarCompo.css";
import { GrCart } from "react-icons/gr";

const Navbar2SearchButton = () => {
	return (
		<div>
			<div className='navbar1-search-button'>
				<button className='flex item-center'>
					{" "}
					<GrCart className='mt-2 ' />
					<span className=''>0</span>
				</button>
			</div>
		</div>
	);
};

export default Navbar2SearchButton;
