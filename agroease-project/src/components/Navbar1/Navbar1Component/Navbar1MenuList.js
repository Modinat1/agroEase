import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import DropDown from "./DropDown";
import "./NavbarCompo.css";
import { navItems } from "./NavbarListModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../Navbar1.css";
import { getCurrentUser } from "../../GetCurrentUser/GetCurrentUser";

const Navbar1MenuList = () => {
	const navRef = useRef();
	// const [dropDowns, setDropDowns] = useState(false);

	// const [userDetails, setuserDetails] = useState([]);

	// useEffect(() => {
	// 	const tokenInfo = localStorage.getItem("token") || "";

	// 	const config = {
	// 		headers: { Authorization: `Bearer ${tokenInfo}` },
	// 	};

	// 	setuserDetails(getCurrentUser(config));
	// }, []);

	// console.log(userDetails);

	const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));

	// const allInfo = userInfo;
	// console.log(allInfo);
	// const userDetails = allInfo.data;

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};

	return (
		<div>
			<ul className='navbar-menulist' ref={navRef}>
				{navItems.map((item, idx) => {
					return (
						<li key={idx}>
							<Link to={item.path}>{item.title}</Link>
						</li>
					);
				})}
				{userInfo ? (
					<li className='navbar-menulist'>Hi {userInfo?.firstname}</li>
				) : (
					""
				)}
				<button>
					<AiOutlineClose
						className='landing-nav-btn nav-close-btn'
						onClick={showNavbar}
					/>
				</button>
			</ul>
			<button>
				<GiHamburgerMenu className='landing-nav-btn' onClick={showNavbar} />
			</button>
		</div>
	);
};

export default Navbar1MenuList;
