import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./NewStoreSection.css";
// import { NewStoreSectionModule } from './NewStoreSectionModule'
import { ProductContext } from "../../../Context/Store/productContext";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
import { ToastContainer, toast } from "react-toastify";
const NewStoreSection = ({ currentItems }) => {
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
		<>
			<div>
				<div className='newstoresec-width'>
					<div className='newstoresec-shop'>
						<p>Shop in our Store</p>
					</div>
					<div className='flexing-store'>
						{currentItems.map((data) => {
							return (
								<div className='newstorecardsec-width'>
									<div className='newstorecardsec-single-width'>
										<div className='newstorecardsec-img'>
											<img src={data?.Product_Images[0]?.url} alt='' />
										</div>
										<div className='newstorecardsec-descrip'>
											<h3>{data.name}</h3>
											<p>{data.description} </p>
										</div>
										<div className='newstorecardsec-price-cart'>
											<p>N{data.price}</p>
											<div className='newstorecardsec-buy-cart'>
												<button className='newstorecart'>
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
																	Remove
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
																	<AiOutlineShoppingCart className='main-green' />
																</button>
																{/* <ToastContainer /> */}
															</>
														)}
													</div>
												</button>
												<div>
													<button className='newstorebuy'>Buy Now</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

function PaginatedBuyerProduct({ itemsPerPage }) {
	const [allProducts, setallProducts] = useState([]);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	const getVerifiedProducts = async () => {
		try {
			const verifiedProducts = await axiosInstance.get("/v1/product/");
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
		const newOffset = (event.selected * itemsPerPage) % allProducts.length;

		setItemOffset(newOffset);
	};

	return (
		<>
			<NewStoreSection currentItems={currentItems} />

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

export default PaginatedBuyerProduct;
