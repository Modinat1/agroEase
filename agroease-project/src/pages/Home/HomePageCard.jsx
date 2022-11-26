import React from "react"
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import rice from "../../images/rice.png";
import garri from "../../images/garri.jpg";
import beans from "../../images/beans.jpg";
import { ProductContext } from "../../Context/Store/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const allProducts = {
	default: [
		{
			id: 1,
			name: "Beans",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 2,
			name: "Garri",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 3,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 4,
			name: "Beans",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 5,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 6,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 7,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 8,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 9,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 10,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 11,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 12,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 13,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 14,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 15,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 16,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: rice,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 17,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: beans,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
		{
			id: 18,
			name: "Rice",
			desc: "Better than Foreing Rice",
			price: 29000,
			image: garri,
			isInStock: false,
			inStock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		},
	],

	livestocks: [
		{
			name: "Cockrel",
			desc: "Home trained chicken",
			price: 5000,
			image: "/assets/chickens.png",
			isInStock: false,
		},
		{
			name: "Broilers",
			desc: "3 months broilers",
			price: "700",
			image: "/assets/broilers.jpg",
			isInStock: false,
		},
		{
			name: "Chicks",
			desc: "Day old chilcks of all sizes",
			price: "20,000",
			image: "/assets/day-old.jpg",
			isInStock: false,
		},
		{
			name: "Cow",
			desc: "Cows are available",
			price: "150,000",
			image: "/assets/cows.png",
			isInStock: false,
		},
		{
			name: "Pigs",
			desc: "Home trained pigs",
			price: "75,000",
			image: "/assets/pigs.jpg",
			isInStock: false,
		},
		{
			name: "Goat",
			desc: "Home trained goats",
			price: "29,000",
			image: "/assets/goat.jpg",
			isInStock: false,
		},
		{
			name: "Turkey<",
			desc: "Turkey birds available",
			price: "15,000",
			image: "/assets/turkey.jpg",
			isInStock: false,
		},
		{
			name: "Eggs",
			desc: "Sets of Eggs available",
			price: "3,000",
			image: "/assets/eggs.jpg",
			isInStock: false,
		},
		{
			name: "Live Fish",
			desc: "Live fresh fish from pond",
			price: "7,000",
			image: "/assets/fish.jpg",
			isInStock: false,
		},
	],
};

// const farmerDB = "db101";
// let todoDBInstance = JSON.parse(localStorage.getItem(farmerDB)) || [];

const Items = ({ currentItems, title, search }) => {
	const cartContext = React.useContext(ProductContext);
	// const { cart, addToCart } = cartContext;
	const { state, dispatch } = cartContext;
	const { cart } = state;

	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});
	const addNotify = () => toast.success("Item added to cart!");
	const removeNotify = () => toast.error("Item removed from cart!");

	return (
		<section id='marketplace'>
			<div className='containers-product'>
				<h2>{title || "Products"}</h2>
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
								return (
									<div className='card'>
										<ToastContainer />
										<div className='bag'>
											<img src={data.image} alt='' />
										</div>
										<div className='price'>
											<h3>{data.name}</h3>
											<p>{data.desc} </p>
											<span>Seller: Agroease</span>
											<h4>Price:{formatter.format(data.price)}</h4>
											<div className='share'>
												<div>
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
														</>
													)}
												</div>
												<div className='by-me'>
													<button id='buy'>Buy Now</button>
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
	const productStore = React.useContext(ProductContext);

	const [products, setProducts] = useState(allProducts.default);

	// We start with an empty list of items.
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	// useEffect(() => {
	// 	console.log(
	// 		"allProducts[productStore.category]",
	// 		allProducts[productStore.category]
	// 	);
	// 	setProducts(allProducts[productStore.category]);
	// }, [productStore.category]);

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage;
		const products = allProducts[productStore.category || "default"] || [];
		// const products = allProducts[productStore.category || "default"] || [];
		// console.log(`Loading items from ${itemOffset} to ${endOffset}`);

		setCurrentItems(products.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(products.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, productStore.category]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) %
				allProducts[productStore.category || "default"] || [].length;
		// console.log(
		//   `User requested page number ${event.selected}, which is offset ${newOffset}`
		// );
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items
				currentItems={currentItems}
				title={productStore.category}
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
