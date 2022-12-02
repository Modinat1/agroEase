import React from "react";
import "./NavbarCompo.css";
import { GrCart } from "react-icons/gr";
import { ProductContext } from "../../../Context/Store/productContext";
import { Link } from "react-router-dom";

const Navbar2SearchButton = () => {
	const cartContext = React.useContext(ProductContext);

	const {
		state: { cart },
		// dispatch,
	} = cartContext;

	return (
		<div>
			<div className='navbar1-search-button'>
				{cart.length === 0 ? (
					<button className='flex item-center'>
						<GrCart color='white' fontSize='25px' />
						<span className=''>{cart.length > 0 ? cart.length : 0}</span>
					</button>
				) : (
					<Link to={"/OrderSummary"}>
						<button className='flex item-center'>
							<GrCart color='white' fontSize='25px' />
							<span className=''>{cart.length > 0 ? cart.length : 0}</span>
						</button>
					</Link>
				)}

				{/* {cart.length > 0 ? (
					cart.map((prod) => {
						return (
							<div className='absolute flex flex-col items-center'>
								<div className='flex mt-4 gap-x-2 mb-4 p-2 bg-white items-center '>
									<span style={{ width: "30px", heigth: "30px" }}>
										<img
											style={{ width: "100%" }}
											src={prod.image}
											alt='cartimg'
										/>
									</span>
									<span>{prod.name}</span>

									<span>{prod.price}</span>
									<span
										onClick={() => {
											dispatch({
												type: "REMOVE_FROM_CART",
												payload: prod,
											});
										}}>
										Delete
									</span>
								</div>
								<Link to={"/OrderSummary"}>
									<button className=' bg-green-500 text-white'>
										Proceed to Cart
									</button>
								</Link>
							</div>
						);
					})
				) : (
					<span>Cart is empty</span>
				)} */}
			</div>
		</div>
	);
};

export default Navbar2SearchButton;
