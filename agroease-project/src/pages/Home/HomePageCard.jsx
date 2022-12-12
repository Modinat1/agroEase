// import React from "react"
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import rice from "../../images/rice.png";
import garri from "../../images/garri.jpg";
import beans from "../../images/beans.jpg";
import { ProductContext } from "../../Context/Store/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../Context/axios-config/axios-user-config";


const Items = ({ currentItems, search }) => {
	// Get all verified Products

	const cartContext = React.useContext(ProductContext);
	const { state, dispatch } = cartContext;
	const { cart } = state;
	
	localStorage.setItem("cartItems", JSON.stringify(cart));

	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	});
	const addNotify = () => toast.success("Item added to cart!");
	const removeNotify = () => toast.error("Item removed from cart!");

	return (
		<section id='marketplace'>
			<div className='containers-product'>
				<h2>{"Products"}</h2>

				<div className='container-card'>
					{currentItems.length > 0 ? (
						currentItems
							.filter((post) => {
								if (search === "") {
									return post;
								} else if (
									post.name.toLowerCase().includes(search.toLowerCase())
								)
									return post;
							})
							.map((data, idx) => {
								console.log(data);
								return (
									<div className='card' key={idx}>
										<div className='bag'>
											<img src={data?.Product_Images[0]?.url} alt='' />
										</div>
										<div className='price'>
											<h3>{data.name}</h3>
											<p>{data.desc} </p>
											<span>Seller: Agroease</span>
											<h4>Price:{formatter.format(data.price)}</h4>
											<div className='share'>
												<div>
													<ToastContainer />
													{cart.some((p) => p.id === data.id) ? (
														<>
															<button
																className='carte'
																id='carte'
																onClick={() => {
																	dispatch({
																		type: "REMOVE_FROM_CART",
																		payload: data,
																	});
																	removeNotify();
																}}>
																Remove from Cart
															</button>
															{/* <ToastContainer /> */}
														</>
													) : (
														<>
															<button
																className='carte'
																id='carte'
																onClick={() => {
																	dispatch({
																		type: "ADD_TO_CART",
																		payload: data,
																	});
																	addNotify();
																}}>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	width={16}
																	height={16}
																	fill='currentColor'
																	className='bi bi-cart3'
																	viewBox='0 0 16 16'>
																	<path
																		d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
																	0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
																	.49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
																	11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
																	3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
																	9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
																	2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
																	1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
																	1 0 0 1 0-2z'
																	/>
																</svg>
															</button>
															{/* <ToastContainer /> */}
														</>
													)}
												</div>
												<div className='by-me'>
													<Link to='OrderSummary'>
														<button
															id='buy'
															onClick={() => {
																dispatch({
																	type: "ADD_TO_CART",
																	payload: data,
																});
																addNotify();
															}}>
															Buy Now
														</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
								);
							})
					) : (
						<h6>No products available</h6>
					)}
				</div>
			</div>
		</section>
	);
};

function PaginatedItems({ itemsPerPage, search }) {

	const [allProducts, setallProducts] = useState([]);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	const getVerifiedProducts = async () => {
		try {
			const verifiedProducts = await axiosInstance.get("/v1/product/");
			console.log(verifiedProducts.data);
			setallProducts(verifiedProducts.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage;
		const products = allProducts;
	
		setCurrentItems(products.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(products.length / itemsPerPage));
		getVerifiedProducts();
	}, [itemOffset, itemsPerPage, allProducts]);


	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) % allProducts.length
		
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items
				currentItems={currentItems}
				search={search}
			/>

			<ReactPaginate
				className='pages'
				breakLabel='...'
				nextLabel='next >'
				pageClassName='page-item'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default PaginatedItems;
