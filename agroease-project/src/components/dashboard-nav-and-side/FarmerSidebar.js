import React from "react";
import { Link } from "react-router-dom";
import Agroeaselogo from "../../images/agro_ease_logo.png";

const NewFarmerSidebar = () => {
	return (
		<>
			<div className='hidden md:flex items-center justify-left w-auto h-screen  space-x-6 bg-white border-x-emerald-300 fixed top-0 z-40'>
				{/* Component Start */}
				{/* <div className='flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-gray-100 rounded'>
				<Link className='flex items-center justify-center mt-3' href='#'>
					<svg
						className='w-8 h-8 fill-current'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
					</svg>
				</Link>
				<div className='flex flex-col items-center mt-3 border-t border-gray-300'>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
					</Link>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</Link>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 bg-gray-300 rounded'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
					</Link>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
							/>
						</svg>
					</Link>
				</div>
				<div className='flex flex-col items-center mt-2 border-t border-gray-300'>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
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
					</Link>
					<Link
						className='flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
							/>
						</svg>
					</Link>
					<Link
						className='relative flex items-center justify-center w-12 h-12 mt-2 hover:bg-gray-300'
						href='#'>
						<svg
							className='w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
							/>
						</svg>
						<span className='absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full' />
					</Link>
				</div>
				<Link
					className='flex items-center justify-center w-16 h-16 mt-auto bg-gray-200 hover:bg-gray-300'
					href='#'>
					<svg
						className='w-6 h-6 stroke-current'
						xmlns='http://www.w3.org/2000/svg'
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
			</div> */}
				{/* Component End  */}
				{/* Component Start */}
				<div className='flex flex-col items-center w-40 h-full overflow-hidden text-green-600 bg-yellow-50 border-x-emerald-300 rounded'>
					<Link className='flex items-center w-full px-1 mt-3' href='#'>
						{/* <svg
							className='w-8 h-8 fill-current'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
						</svg> */}
						<img src={Agroeaselogo} alt='logo' />
						{/* <span className='ml-2 text-sm font-bold'>The App</span> */}
					</Link>
					<div className='w-full px-2'>
						<div className='flex flex-col items-center w-full mt-3 border-t border-gray-300'>
							<Link
								to={"/farmerdashboardpage"}
								className='flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300'
								href='#'>
								<svg
									className='w-6 h-6 stroke-current'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
									/>
								</svg>
								<span className='ml-2 text-sm font-medium'>Dasboard</span>
							</Link>
							<Link
								to={"/farmerprofilepage"}
								className='flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300'
								href='#'>
								{/* <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg> */}
								<svg
									className='w-6 h-6 stroke-current'
									xmlns='http://www.w3.org/2000/svg'
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
								<span className='ml-2 text-sm font-medium'>Profile</span>
							</Link>
							<Link
								to={"/farmerproductpage"}
								className='flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded'
								href='#'>
								{/* <svg
									className='w-6 h-6 stroke-current'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg> */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-people'
									viewBox='0 0 16 16'>
									<path d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' />
								</svg>
								<span className='ml-2 text-sm font-medium'>Products</span>
							</Link>
							<Link
								to={"/farmercurrenttask"}
								className='flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300'
								href='#'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-list-task'
									viewBox='0 0 16 16'>
									<path
										fill-rule='evenodd'
										d='M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z'
									/>
									<path d='M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z' />
									<path
										fill-rule='evenodd'
										d='M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z'
									/>
								</svg>
								<span className='ml-2 text-sm font-medium'>Current Task</span>
							</Link>
						</div>
						<div className='flex flex-col items-center w-full mt-2 border-t border-gray-300'>
							{/* <Link
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Reports</span>
              </Link> */}
						</div>
					</div>
					<Link
						className='flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300'
						href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-power'
							viewBox='0 0 16 16'>
							<path d='M7.5 1v7h1V1h-1z' />
							<path d='M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z' />
						</svg>
						<span className='ml-2 text-sm font-medium'>Log out</span>
					</Link>
				</div>
				{/* Component End  */}
			</div>
		</>
	);
};

export default NewFarmerSidebar;
