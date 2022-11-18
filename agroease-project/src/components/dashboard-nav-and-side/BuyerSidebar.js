import React from "react";
import { Link } from "react-router-dom";
import AgroEaseLogo from "../../images/agrologo.png";

const BuyerSidebar = () => {
	return (
		<div>
			<nav className='dashboard-sidebar'>
				<div className='logo-name'>
					<div className='logo-name' style={{ height: 60 }}>
						<img src={AgroEaseLogo} alt='AgroEase Logo' id='agroease_logo' />
					</div>
				</div>
				<div className='menu-items'>
					<ul className='nav-links'>
						<li className='flex'>
							<i className='uil uil-estate pt-3 pr-2' />
							<Link to='/buyerdashboardpage'>
								<span className='link-name cursor-pointer'>Dahsboard</span>
							</Link>
						</li>
						<li className='flex'>
							<i className='uil uil-users-alt pt-4 pr-2' />
							<Link to='/buyerprofilepage'>
								<span className='link-name cursor-pointer'>Profile</span>
							</Link>
						</li>
						<li className='flex'>
							<i className='uil uil-elipsis-double-v-alt pt-4 pr-2' />
							<Link to='/buyerproductpage'>
								<span className='link-name cursor-pointer'>Products</span>
							</Link>
						</li>
					</ul>
					<ul className='logout-mode'>
						<li className='flex'>
							<i className='uil uil-signout pt-4 pr-2' />
							<Link to='/'>
								<span className='link-name'>Logout</span>
							</Link>
						</li>
						
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default BuyerSidebar;
