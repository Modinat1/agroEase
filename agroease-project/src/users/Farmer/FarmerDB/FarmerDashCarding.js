import React, { useEffect, useState } from 'react'
import "../../Buyer/BuyerDashboard/BuyerDashboard.css";
import WeatherImg from "../../../images/farmer_img_circle.png";
import NewHeroFirstImg from '../../../pages/NewWork/NewHeroSection/NewHeroFirstImg';
import axiosInstance from '../../../Context/axios-config/axios-user-config';

const FarmerDashCarding = () => {

    const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);
	const [iconID, setIconID] = useState([]);


	const allUser = JSON.parse(localStorage.getItem("loginUserInfo")) || [];
	const userInfo = JSON.parse(localStorage.getItem("user"));
	console.log(userInfo);
	const {id} = allUser;
	
	const [products, setProducts] = useState([]);
	const accessToken = localStorage.getItem("token");

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});

			await fetch(
				` https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=d065cebed8aca1c38e488d38fece74f4`
			)
				.then((res) => res.json())
				.then((result) => {
					setData(result);
					setIconID(result.weather[0].icon);
					console.log(result);
				});
		};

		fetchData();
	}, [lat, long]);

	// Get product to render the length on the card
	const getProduct = async () => {
		try {
			const response = await axiosInstance.get(
				`v1/product/store/${id}`,
				config
			);
			console.log(response.data[0]);
			setProducts(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);


	return (
		<div>
			<section className='buyer_dash_summary'>
				<section className='today_weather_card_container'>
					<h4>Product Details</h4>
					<div className='buyer_summary_card_wrapper'>
						{/* card 1 */}
						<div className='buyer_dash_category_card buyer_active farmer_buyer_card-1'>
							<p className='farmer_buyer_title'>Total Products</p>
							<p className='farmer_buyer_price'>{products?.length}</p>
						</div>
						{/* card 2 */}
						<div className='buyer_dash_category_card farmer_buyer_card-2'>
							<p className='farmer_buyer_title'>Successful Products</p>
							{
								products[0].status ? 
								<p className='farmer_buyer_price'>{products?.length}</p>
								:
								<p className='farmer_buyer_price'>0</p>

								

							}
						</div>
						{/* card 3 */}
						<div className='buyer_dash_category_card farmer_buyer_card-3'>
							<p className='farmer_buyer_title'>Wallet</p>
							<p className='farmer_buyer_price'>0.00</p>
						</div>
					</div>
				</section>
				<NewHeroFirstImg />
			</section>
		</div>
	);
   
}

export default FarmerDashCarding