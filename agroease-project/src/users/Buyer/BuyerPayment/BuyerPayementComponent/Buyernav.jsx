import React from "react";
import "../BuyerPaymentCSS/BuyerNav.css";
import Agroeaslogo from "../../../../images/agro_ease_logo.png";
// import { BsSearch } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

export const Buyernav = () => {
	return (
		<>
			<div className='buyers-dashboard-nav'>
				<div className='buyer-nav-logo'>
					<Link to={"/"}>
						<img src={Agroeaslogo} alt='' className='nav-logos' />
					</Link>

					{/* <div className='buyer-nav-detail'>
						<h3 className='buyer-nav-name'>
							Hello <span>Godswill</span>
						</h3>
					</div> */}
					{/* <p>Today is Monday, 20th October, 2022</p> */}
				</div>

				{/* <div className='buyer-search-list'> */}
				<div className='buyer-nav-input-cart'>
					{/* <div className='buyer-input-search'>
						<input type='text' className='buyer-search' />
						<BsSearch className='BsSearch' />
					</div> */}
					<div>
						<button className='buyer-btn-grey'>
							<MdOutlineNotificationsNone className='buyer-notification-bell' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
