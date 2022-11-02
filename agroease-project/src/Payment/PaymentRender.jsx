// import './App.css';
// import CreateAccount from './Component/Pages/Createaccount/CreateAccount';

import { Routes, Route } from "react-router-dom";

import { Shipping } from "./Component/Pages/Payment/Shipping";
import { Payment } from "./Component/Pages/Payment/Payment";
import { Oderreview } from "./Component/Pages/Payment/Oderreview";
import { PaymentProcess } from "./Component/Pages/Payment/PaymentProcess";
import { OrderSuccessful } from "./Component/Pages/Payment/OrderSuccessful";

// import { Payment } from './Component/Pages/Homepage/Payment';

function PaymentRender() {
	return (
		<>
			<Routes>
				<Route path='Payment' element={<Payment />} />
				<Route path='Orderreview' element={<Oderreview />} />
				<Route path='PaymentProcessing' element={<PaymentProcess />} />
				<Route path='OrderSuccesful' element={<OrderSuccessful />} />
				<Route path='Shipping' element={<Shipping />} />
			</Routes>
		</>
	);
}

export default PaymentRender;
