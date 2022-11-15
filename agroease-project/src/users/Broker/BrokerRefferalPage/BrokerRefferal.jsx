import React from "react";
// import Dashnav from "../../../components/dashboard-nav-and-side/Dashnav";
// import Sidebar from "../../../components/dashboard-nav-and-side/Sidebar";
import "./BrokerRefferal.css";
// import { TbFriends } from "react-icons/tb";
import meetingPic from "../../../images/Meeting.png";
import Arrow1 from "../../../images/Arrow1.png";
import Arrow2 from "../../../images/Arrow2.png";
import Moneybag from "../../../images/MoneyBag.png";
import AddUser from "../../../images/AddUserMale.png";
import EmailSend from "../../../images/EmailSend.png";
import NewBrokerNavbar from "../../../components/dashboard-nav-and-side/NewBrokerNavbar";
import NewBrokerSidebar from "../../../components/dashboard-nav-and-side/NewBrokerSidebar";
// import BrokerSidebar from "../../../components/dashboard-nav-and-side/BrokerSidebar";
// import BrokerDashnav from "../../../components/dashboard-nav-and-side/BrokerDashnav";

export const BrokerRefferal = () => {
	return (
		<div>
			{/* <Sidebar />
			<Dashnav /> */}
			{/* <BrokerSidebar />
			<BrokerDashnav /> */}
			<NewBrokerNavbar />
			<NewBrokerSidebar />
			<section className='broker-referral-container'>
				<div className='referral-header'>
					<h3>Referral</h3>
					<h3>ID: 05678</h3>
				</div>
				<div>
					<p>
						Invite a farmer to AgroEase, if they sign up and sell their product,
						then you will get 5% of their selling price
					</p>
				</div>
				<div className='referral-content-img'>
					<div className='img-container-referral meeting-1'>
						<div className='referral-img meeting'>
							<img src={meetingPic} alt='MeetingPic' />
							{/* <TbFriends className='TbFriends-icon' /> */}
						</div>
						<p>Invite a farmer to AgroEase, and have them join the platform</p>
					</div>
					<div className='arrows ar-1'>
						<img src={Arrow1} alt='Arrow1' />
					</div>
					<div className='img-container-referral'>
						<div className='referral-img user-male'>
							<img src={AddUser} alt='Add Users' />
						</div>
						<p>
							Let them register on our platform using your ID as referral code
						</p>
					</div>
					<div className='arrows ar-2'>
						<img src={Arrow2} alt='Arrow2' />
					</div>
					<div className='img-container-referral'>
						<div className='referral-img money-bag'>
							<img src={Moneybag} alt='Moneybag' />
						</div>
						<p>
							Let them register on our platform using your ID as referral code
						</p>
					</div>
				</div>
				<div className='invite-users'>
					<h4>Invite other brokers</h4>
					<p>
						Insert their email address and send them an invitation to join
						AgroEase
					</p>
				</div>

				<div className='referral-input'>
					<input
						className='ref-input'
						type='email'
						placeholder='Email Address'
					/>
					<div className='referral-input-img'>
						<img src={EmailSend} alt='Email Send' />
					</div>
				</div>
			</section>
		</div>
	);
};
