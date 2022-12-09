import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import DropDown from "./DropDown";
import "./NavbarCompo.css";
import { navItems } from "./NavbarListModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../Navbar1.css";
import { useState } from "react";


const Navbar1MenuList = () => {
	const navRef = useRef();
	const [dropDowns, setDropDowns] = useState(false);
	const [dropDown, setDropDown]= useState(false)

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
	};

	const navigate = useNavigate()
	const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
	const userDetails = JSON.parse(localStorage.getItem("user"));

	const handleSubmit = () => {
		if(userDetails?.data?.type === "user") {
			navigate("/buyerdashboardpage")
		} else if (userDetails?.data?.type === "admin") {
			navigate("/AdminDashIndex")
		} else {
			return true
		}
	}

	return (
		<div>
			<ul className='navbar-menulist' ref={navRef}>
				{navItems.map((item, idx) => {
					// if (item.title === "Account") {
					//   return (
					//     <li key={item.id} onMouseEnter={()=> setDropDowns(true)} onMouseLeave={()=> setDropDowns(false)}>
					//       <Link to={item.path} >{item.title}</Link>
					//       {dropDowns && <DropDown />}
					//     </li>
					//   )

					// }
					return (
						<li key={idx}>
							<Link to={item.path}>{item.title}</Link>
						</li>
					);
				})}
				{
					userInfo? 
					
					<li onMouseEnter={()=> setDropDowns(true)} onMouseLeave={()=> setDropDowns(false)} className="navbar-menulist">
						Hi {userInfo.firstname}
						{dropDowns && 
							 <ul className={dropDown ? "submenu-item clicked" : "submenu-item"}>
								<li className='account-submenu' onClick={handleSubmit}>
									 Dashboard
								</li>
								<li className='account-submenu' onClick={() => setDropDown(false)}>
									 Logout
								</li>
						 	</ul>
						}
					</li>
					:
					<Link to="/UsersSignIn"><li className="navbar-menulist">Account</li></Link>
				}
				
				
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
