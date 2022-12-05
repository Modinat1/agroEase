import React from "react";
import { Link } from "react-router-dom";
import GeneralUserAuth from "../../Context/user-auth/GeneralUserAuth";
import UsersDashboardSearch from "./UsersDashboardSearch";
// import Agroeaselogo from "../../images/agrologo.png";

const NewBrokerNavbar = () => {
	const { userAuth } = GeneralUserAuth();
	const { allUser } = userAuth;

	return (
		<div>
			{/* navbar */}
			<nav className='flex justify-between bg-green-600 text-white w-full fixed top-0 z-20'>
				<div className='px-5 xl:px-12 py-6 flex w-full justify-between items-center'>
					<Link className='hidden md:flex text-2xl font-bold font-heading pl-12 ml-20 md:ml-40'>
						{/* <img class='h-12' src={Agroeaselogo} alt='logo' /> */}
						Hello, {`${allUser?.firstname} ${allUser?.lastname}`}
					</Link>
					<Link className='navbar-burger self-center mr-12 xl:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-9 w-9 hover:text-gray-200'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</Link>
					{/* Search Links */}
					{/* Header Icons */}
					<div className='hidden xl:flex items-center space-x-5 items-center'>
						<UsersDashboardSearch />

						{/* <Link className='flex items-center hover:text-gray-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-8 w-8'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							<span className='flex absolute -mt-5 ml-4'>
								<span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75' />
								<span className='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
							</span>
						</Link> */}
						{/* Sign In / Register      */}
						<Link className='flex items-center hover:text-gray-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10  hover:text-gray-200'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</Link>
					</div>
				</div>
				{/* Responsive navbar */}
				{/* <Link className='xl:hidden flex mr-6 items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 hover:text-gray-200'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
						/>
					</svg>
					<span className='flex absolute -mt-5 ml-4'>
						<span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75' />
						<span className='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
					</span>
				</Link> */}

				{/* <Link className='hover:text-gray-200 mt-6 md:mt-8'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-9 h-9'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-bell'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'
						/>
					</svg>
				</Link> */}
				{/* <Link className='navbar-burger self-center mr-12 xl:hidden'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 hover:text-gray-200'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</Link> */}
			</nav>

			{/* Does this resource worth a follow? */}
		</div>
	);
};

export default NewBrokerNavbar;
