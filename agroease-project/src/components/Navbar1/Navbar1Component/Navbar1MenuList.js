import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "./NavbarCompo.css";
import { navItems } from "./NavbarListModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../Navbar1.css";

const Navbar1MenuList = () => {
	const navRef = useRef();
	const [dropDowns, setDropDowns] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};

	return (
		<div>
			<ul className='navbar-menulist' ref={navRef}>
				{navItems.map((item) => {
					// if (item.title === "Account") {
					//   return (
					//     <li key={item.id} onMouseEnter={()=> setDropDowns(true)} onMouseLeave={()=> setDropDowns(false)}>
					//       <Link to={item.path} >{item.title}</Link>
					//       {dropDowns && <DropDown />}
					//     </li>
					//   )

					// }
					return (
						<li key={item.id}>
							<Link to={item.path}>{item.title}</Link>
						</li>
					);
				})}
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
