import React from "react";
import WeatherImg from "../../../images/farmer_img_circle.png";
import CloudImg from "../../../images/farmer_cloud_img.png";

const BrokerDashWeather = () => {
	return (
		<section className='admin_weather_container'>
			<p className='weather_report'>Weather Report</p>
			<div className='weather_img'>
				<img src={WeatherImg} alt='weather img' id='weather_circle' />
				<img src={CloudImg} alt='cloud icon' id='weather_cloud_icon' />
			</div>
			<p className='text-xs'>
				Today:
				<span>
					29 <sup> ℃ </sup>
				</span>
			</p>
		</section>
	);
};

export default BrokerDashWeather;
