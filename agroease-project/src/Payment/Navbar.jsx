import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className='nav-width container'>
					<Link to='/'>
						<img src='/assets/logo.png' alt='' className='nav-logos' />
					</Link>
					<div className='container search-list'>
						<div className='nav-input-cart'>
							<div className='input-search'>
								<div>
									<input
										type='text'
										className='search'
										id='input'
										placeholder='Search Products'
									/>
									<div className='autocomplete'>
										<ul className='display-items'>
											<li />
										</ul>
									</div>
								</div>
								<div>
									<button className='btn-green'>Search</button>
								</div>
							</div>
							<div className=' cart btn-white'>
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
						<div className='menu-list'>
							<ul>
								<Link to='/About'>
									<li>About</li>
								</Link>
								<Link to='/Contact'>
									<li>Contact</li>
								</Link>

								{/* <a href='/pages/contact/contact.html'>
									<li>Contact</li>
								</a> */}
								<a href='/pages/homepage/homepage.html' />
								<li>
									<a href='/pages/homepage/homepage.html'>Blog</a>
									<div className='sub-menu1'>
										<a href='/pages/homepage/homepage.html'></a>
										<ul>
											{/* <a href='/pages/homepage/homepage.html'></a>
											<li>
												<a href='/pages/homepage/homepage.html' />
												<a href='/pages/agronews/agronews.html'>Agro News</a>
											</li> */}
											<li>
												{/* <a href='/pages/agroeducation/agroeducation.html'>
													Agro Education
												</a> */}
												<Link to='/AgroEducation'>
													<li>AgroEducation</li>
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<a href='/pages/homepage/homepage.html' />
								<li>
									<a href='/pages/homepage/homepage.html'>Help</a>
									<div className='sub-menu1'>
										<a href='/pages/homepage/homepage.html'></a>
										<ul>
											<a href='/pages/homepage/homepage.html'></a>
											<li>
												{/* <a href='/pages/homepage/homepage.html' />
												<a href='/pages/faq/faq.html'>FAQs</a> */}
												<Link to='/FAQ'>
													<li>FAQ</li>
												</Link>
											</li>
										</ul>
									</div>
								</li>
								<a href='/pages/homepage/homepage.html' />
								<li>
									<a href='/pages/homepage/homepage.html'>Account</a>
									<div className='sub-menu1'>
										<a href='/pages/homepage/homepage.html'></a>
										<ul>
											<a href='/pages/homepage/homepage.html'></a>
											<li>
												{/* <a href='/pages/homepage/homepage.html' />
												<a href='/pages/login/login.html'>Log In</a> */}
												<Link to='/Login'>
													<li>Login</li>
												</Link>
											</li>
											<li>
												<Link to='/Createaccount'>
													<li>Create Account</li>
												</Link>
												{/* <a href='/pages/createaccount/createaccount.html'>
													Create Account
												</a> */}
											</li>
										</ul>
									</div>
								</li>
							</ul>
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
					<div className=' cart2 btn-white'>
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

export default Navbar;
