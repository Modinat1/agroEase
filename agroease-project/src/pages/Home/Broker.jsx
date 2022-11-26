import React from "react";
import { Link } from "react-router-dom";

import broker from "../../images/broker.png";

export const Broker = () => {
	return (
		//    <div className="broker-man">
		//   <div className="broker-child">
		//     <div className="broker-child2">
		//       <p>Earn Up to N100K monthly as an AgroEase Broker </p>
		//       <br />
		//       {/* <a href=""> */}
		//       <button id="broker-btn">Learn More
		//         <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
		//           <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
		//           <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
		//         </svg></button>
		//     </div>
		//   </div>
		//   <div className="broker-img">
		//     <img src={broker}alt="broker" />
		//   </div>
		// </div>

		<div className='broker-container'>
			<div className='broker-image'>
				<img src={broker} alt='broker' />
			</div>
			<div className='broker-info'>
				<div className='broker-write'>
					<p>Earn Up to N100K monthly as an AgroEase Broker </p>
					<div className='broker-btn'>
						<Link to={"/UsersSignIn"}>
							<button id='broker-btn'>
								Learn More
								{/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
         <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg> */}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
