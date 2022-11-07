import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import { Agroeducation } from "./pages/AgroEducation/AgroEducation";
import Account from "./pages/Account/Account";
import FarmerSigninForm from "./users/Farmer/FarmerSignupPage/FarmerSigninForm";
import BrokerSigninForm from "./users/Broker/BrokerSignupPage/BrokerSigninForm";
import BuyerLoginForm from "./users/Buyer/BuyerLoginPage/BuyerLoginForm";
import FarmerLoginForm from "./users/Farmer/FarmerLoginPage/FarmerLoginForm";
import BrokerLoginForm from "./users/Broker/BrokerLoginPage/BrokerLoginForm";
import { Index } from "./users/Farmer/FarmerProductUpload.js/Index";
import { AdminPaymentTask } from "./users/Admin/AdminDasboardTask/AdminPaymentTask/AdminPaymentTask";
// import { Shipping } from "./Payment/Shipping";
// import { Payment } from "./Payment/Payment";
// import { Oderreview } from "./Payment/Oderreview";
// import { PaymentProcess } from "./Payment/PaymentProcess";
// import { OrderSuccessful } from "./Payment/OrderSuccessful";
import { AdminLogisticsTask } from "./users/Admin/AdminDasboardTask/AdminLogisticsTask/AdminLogisticsTask";
import { AdminTaskNotification } from "./users/Admin/AdminTaskNotification/AdminTaskNotification";

import { FarmerProductIndex } from "./users/Farmer/farmerProduct/FarmerProductIndex";
import { FarmIndex } from "./users/Farmer/farmersCurrentTask/FarmIndex";
import { BuyerDashboardIndex } from "./users/Buyer/buyerDashboard/BuyerDashboardIndex";
import { AdminDashIndex } from "./users/Admin/adminDashboard copy/AdminDashIndex";

import BuyerSigninPage from "./users/Buyer/BuyerSigninPage";
import About from "./pages/About/About";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import BrokerDashboardPage from './users/Broker/BrokerDashboard/BrokerDashboardPage'
import BrokerClientPage from "./users/Broker/BrokerClient/BrokerClientPage";
import BrokerRefferalPage from "./users/Broker/BrokerReferral/BrokerRefferalPage";
import BuyerDashboardPage from "./users/Buyer/BuyerDashboard/BuyerDashboardPage";
import { BuyerShipping } from "./users/Buyer/BuyerPayment/BuyerShipping";
import { BuyerPayment } from "./users/Buyer/BuyerPayment/BuyerPayment";
import { BuyerOderreview } from "./users/Buyer/BuyerPayment/BuyerOderreview";
import { BuyerOrderSuccessful } from "./users/Buyer/BuyerPayment/BuyerOrderSuccessful";

function App() {
	return (
		<div>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/blog' element={<Agroeducation />} />
				<Route exact path='/help' element={<Help />} />
				<Route exact path='/' element={<Account />} />
				<Route exact path='/buyersignup' element={<BuyerSigninPage />} />
				<Route exact path='/farmersignup' element={<FarmerSigninForm />} />
				<Route exact path='/brokersignup' element={<BrokerSigninForm />} />
				<Route exact path='/brokerlogin' element={<BrokerLoginForm />} />
				<Route exact path='/buyerlogin' element={<BuyerLoginForm />} />
				<Route exact path='/farmerlogin' element={<FarmerLoginForm />} />
				<Route exact path='/Farmerindex' element={<Index />} />
				<Route exact path='/AdminTaskNotification' element={<AdminTaskNotification />} />
				<Route exact path='/AdminPaymentTask' element={<AdminPaymentTask />} />
				<Route exact path='/AdminLogisticsTask' element={<AdminLogisticsTask />}/>
				<Route exact path='/brokerdashboard' element={<BrokerDashboardPage />}/>
				<Route exact path='/brokerclientpage' element={<BrokerClientPage />}/>
				<Route exact path='/brokerrefferalpage' element={<BrokerRefferalPage />}/>
				<Route exact path='/buyerdashboardpage' element={<BuyerDashboardPage />}/>
				<Route exact path='/FarmerProductIndex' element={<FarmerProductIndex />}/>
				<Route exact path='/FarmIndex' element={<FarmIndex />} />
				<Route exact path='/BuyerDashboardIndex' element={<BuyerDashboardIndex />}/>
				<Route exact path='/AdminDashIndex' element={<AdminDashIndex />} />
				<Route exact path='/AdminLogisticsTask' element={<AdminLogisticsTask />}/>
				<Route exact path='/AdminLogisticsTask' element={<AdminLogisticsTask />}/>
				{/* New routes added */}
				<Route path='BuyerPayment' element={<BuyerPayment />} />
				<Route path='BuyerOrderreview' element={<BuyerOderreview />} />
				{/*<Route path='PaymentProcessing' element={<PaymentProcess />} />*/}
				<Route path='BuyerOrderSuccesful' element={<BuyerOrderSuccessful />} />
				<Route path='BuyerShipping' element={<BuyerShipping />} />
				<Route path='OrderSummary' element={<OrderSummary />} />
			</Routes>
		</div>
	);
}

export default App;
