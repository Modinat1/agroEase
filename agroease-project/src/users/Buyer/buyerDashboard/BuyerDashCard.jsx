import React, { useEffect, useState } from "react";
import "./BuyerDashCard.css";
import WeatherImg from "../../../images/farmer_img_circle.png";
// import CloudImg from "../../../images/farmer_cloud_img.png";
// import  { useEffect, useState } from "react";
// import axios from "axios";

export const BuyerDashCard = () => {
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
					<h4>Today</h4>
					<div className='buyer_summary_card_wrapper'>
						{/* card 1 */}
						<div className='buyer_dash_category_card buyer_active farmer_buyer_card-1'>
							<p className='farmer_buyer_title'>Total Product</p>
							<p className='farmer_buyer_price'>600</p>
						</div>
						{/* card 2 */}
						<div className='buyer_dash_category_card farmer_buyer_card-2'>
							<p className='farmer_buyer_title'>Sold Product</p>
							<p className='farmer_buyer_price'>260</p>
						</div>
						{/* card 3 */}
						<div className='buyer_dash_category_card farmer_buyer_card-3'>
							<p className='farmer_buyer_title'>Total revenue</p>
							<p className='farmer_buyer_price'>0.00</p>
						</div>
					</div>
				</section>
				{/* buyer Weather Container */}
				<section className='buyer_weather_container'>
					<p className='weather_report'>Weather Report of {data.name} </p>
					<div className='weather_img'>
						<img src={WeatherImg} alt='weather img' id='weather_circle' />
						<img
							src={"https://openweathermap.org/img/wn/" + iconID + ".png"}
							alt='weather pictures'
							id='weather_cloud_icon'
						/>
					</div>
					<p>
						Today:
						<span>
							{/* {Math.round(data.main.temp)} */}

							<sup> ℃ </sup>
						</span>
					</p>
				</section>
			</section>
		</div>
	);
};
