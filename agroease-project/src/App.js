import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import { Agroeducation } from "./pages/AgroEducation/AgroEducation";
import FarmerSigninForm from "./users/Farmer/FarmerSignupPage/FarmerSigninForm";
import BrokerSigninForm from "./users/Broker/BrokerSignupPage/BrokerSigninForm";
import BuyerSigninForm from "./users/Buyer/BuyerSignupPage/BuyerSigninForm";
import Account from "./pages/Account/Account";
import BrokerLoginForm from "./users/Broker/BrokerLoginPage/BrokerLoginForm";
import { Index } from "./users/Farmer/FarmerProductUpload.js/Index";
import { AdminPaymentTask } from "./users/Admin/AdminDasboardTask/AdminPaymentTask/AdminPaymentTask";
import { Shipping } from "./Payment/Shipping";
import { Payment } from "./Payment/Payment";
import { Oderreview } from "./Payment/Oderreview";
import { PaymentProcess } from "./Payment/PaymentProcess";
import { OrderSuccessful } from "./Payment/OrderSuccessful";
import { AdminLogisticsTask } from "./users/Admin/AdminDasboardTask/AdminLogisticsTask/AdminLogisticsTask";
import { AdminTaskNotification } from "./users/Admin/AdminTaskNotification/AdminTaskNotification";

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
				<Route exact path='/buyersignup' element={<BuyerSigninForm />} />
				<Route exact path='/farmersignup' element={<FarmerSigninForm />} />
				<Route exact path='/brokersignup' element={<BrokerSigninForm />} />
				<Route exact path='/brokerlogin' element={<BrokerLoginForm />} />

				<Route exact path='/Farmerindex' element={<Index />} />
				<Route exact path='/AdminTaskNotification' element={<AdminTaskNotification />} />
				<Route exact path='/AdminPaymentTask' element={<AdminPaymentTask />} />
				<Route
					exact
					path='/AdminLogisticsTask'
					element={<AdminLogisticsTask />}
				/>
				{/* New routes added */}
				<Route path='Payment' element={<Payment />} />
				<Route path='Orderreview' element={<Oderreview />} />
				<Route path='PaymentProcessing' element={<PaymentProcess />} />
				<Route path='OrderSuccesful' element={<OrderSuccessful />} />
				<Route path='Shipping' element={<Shipping />} />
			</Routes>
		</div>
	);
}

export default App;
