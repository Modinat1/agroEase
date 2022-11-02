import React from "react";

export const Buyernav = () => {
	return (
		<>
			<nav>
				<div className='nav-width container buyers-dasboard'>
					<a href='/pages/homepage/homepage.html'>
						<img src='/assets/logo.png' alt='' className='nav-logos' />
					</a>
					<div className='container search-list'>
						<div className='nav-input-cart'>
							<div className='input-search'>
								<input
									type='text'
									className='search'
									id='input'
									placeholder='Search Products'
								/>
								<div>
									<button className='btn-green'>Search</button>
								</div>
							</div>
							{/* <div class=" cart btn-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(9,124,13,1)"/></svg>
                    </div> */}
						</div>
						{/* buyers detals */}
						<div className='buyers-dasboard-menu container'>
							<div className='buyers-back-btn'>
								<div className='cart btn-white'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width={16}
										height={16}>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
											fill='rgba(9,124,13,1)'
										/>
									</svg>
								</div>
							</div>
							<div className='buyers-dashboard-details'>
								<p>
									Hello<span id='buyers-name'> Godswill</span>
								</p>
								<div className='buyers-img'>
									<img id='buyers-img' src='../../assets/godswill.png' alt='' />
								</div>
								<div className='buyers-caret-container'>
									<div className='buyers-caret' />
									<ul className='buyers-list-container'>
										<li>Profile</li>
										<li>Settings</li>
										<li>Logout</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='menu_btn'>
						<i className='fas fa-bars' />
					</div>
				</div>
				<div className='nav-input-cart2'>
					<div className='input-search2'>
						<input
							type='text'
							className='search'
							placeholder='Search Products'
						/>
						<div>
							<button className='btn-green'>Search</button>
						</div>
					</div>
					<div className='cart2 btn-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={16}
							height={16}>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
								fill='rgba(9,124,13,1)'
							/>
						</svg>
					</div>
				</div>
			</nav>
		</>
	);
};
