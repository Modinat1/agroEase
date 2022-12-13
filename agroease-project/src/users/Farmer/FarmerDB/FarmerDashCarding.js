import React, { useEffect, useState } from 'react'
import "../../Buyer/BuyerDashboard/BuyerDashboard.css";
import WeatherImg from "../../../images/farmer_img_circle.png";
import NewHeroFirstImg from '../../../pages/NewWork/NewHeroSection/NewHeroFirstImg';

const FarmerDashCarding = () => {

    const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);
	const [iconID, setIconID] = useState([]);

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

	return (
		<div>
			<section className='buyer_dash_summary'>
				<section className='today_weather_card_container'>
					<h4>Product Details</h4>
					<div className='buyer_summary_card_wrapper'>
						{/* card 1 */}
						<div className='buyer_dash_category_card buyer_active farmer_buyer_card-1'>
							<p className='farmer_buyer_title'>Total Products</p>
							<p className='farmer_buyer_price'>0</p>
						</div>
						{/* card 2 */}
						<div className='buyer_dash_category_card farmer_buyer_card-2'>
							<p className='farmer_buyer_title'>Pending Products</p>
							<p className='farmer_buyer_price'>0</p>
						</div>
						{/* card 3 */}
						<div className='buyer_dash_category_card farmer_buyer_card-3'>
							<p className='farmer_buyer_title'>Successful Products</p>
							<p className='farmer_buyer_price'>0</p>
						</div>
					</div>
				</section>
				<NewHeroFirstImg />
			</section>
		</div>
	);
   
}

export default FarmerDashCarding