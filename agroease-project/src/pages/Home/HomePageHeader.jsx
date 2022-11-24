import React from "react";
// import agrologo from "../../../images/agrologo.png"
import agrologo from "../../images/farming.jpg";
// import fruits from "../../images/fruits.jpg"

export const HomepageHeader = () => {
	return (
		// <div>
		//     <img src={agrologo} alt="logo"/>
		// </div>

		<div className='categories-home-section'>
			<div class='home-page-article'>
				<div class='wrapper-article'>
					<div class='wrapper-writeup'>
						<h2>Buy fresh, high quality farm Produce at affordable rate</h2>
						<p>Have it delivered to your location</p>
					</div>
					<button id='buy-now-overlay'>
						<a href='#marketplace'>Buy Now </a>
						<div class='buttn-buy-now'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-chevron-double-right'
								viewBox='0 0 16 16'>
								<path
									fill-rule='evenodd'
									d='M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
								/>
								<path
									fill-rule='evenodd'
									d='M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z'
								/>
							</svg>
						</div>
					</button>
				</div>

				<div class='overlay'>
					<div class='banner-images'>
						<img src={agrologo} alt='logo' />
						{/* <img class="mySlides" src="/assets/fruits-images.jpg" alt="agroease banner">
        <img class="mySlides" src="/assets/lapy-images.jpg" alt="agroease banner">
        <img class="mySlides" src="/assets/drone-watering.jpg" alt="agroease banner">
        <img class="mySlides" src="/assets/maize-plantaion.jpg" alt="agroease banner"> */}
					</div>
				</div>
			</div>
		</div>
	);
};
