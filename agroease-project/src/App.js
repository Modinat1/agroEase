import './App.css'

import { Route, Routes } from 'react-router-dom'

import About from './pages/About/About'
import Account from './pages/Account/Account'
import { AdminDashIndex } from './users/Admin/adminDashboard copy/AdminDashIndex'
import { AdminLogisticsTask } from './users/Admin/AdminDasboardTask/AdminLogisticsTask/AdminLogisticsTask'
import { AdminPaymentTask } from './users/Admin/AdminDasboardTask/AdminPaymentTask/AdminPaymentTask'
import { AdminTaskNotification } from './users/Admin/AdminTaskNotification/AdminTaskNotification'
import { Agroeducation } from './pages/AgroEducation/AgroEducation'
import BrokerClientPage from './users/Broker/BrokerClient/BrokerClientPage'
import BrokerDashboardPage from './users/Broker/BrokerDashboard/BrokerDashboardPage'
import BrokerLoginForm from './users/Broker/BrokerLoginPage/BrokerLoginForm'
import BrokerProfilePage from './users/Broker/BrokerProfile/BrokerProfilePage'
import { BrokerRefferalPage } from './users/Broker/BrokerRefferalPage/BrokerRefferalPage'
import BrokerSigninForm from './users/Broker/BrokerSignupPage/BrokerSigninForm'
import { BuyerDashboardPage } from './users/Buyer/BuyerDashboard/BuyerDashboardPage'
import BuyerLoginForm from './users/Buyer/BuyerLoginPage/BuyerLoginForm'
import { BuyerOderreview } from './users/Buyer/BuyerPayment/BuyerOderreview'
import { BuyerOrderSuccessful } from './users/Buyer/BuyerPayment/BuyerOrderSuccessful'
import { BuyerPayment } from './users/Buyer/BuyerPayment/BuyerPayment'
import BuyerProductPage from './users/Buyer/BuyerProduct/BuyerProductPage'
import BuyerProfilePage from './users/Buyer/BuyerProfile/BuyerProfilePage'
import { BuyerShipping } from './users/Buyer/BuyerPayment/BuyerShipping'
import BuyerSigninPage from './users/Buyer/BuyerSigninPage'
import Contact from './pages/Contact/Contact'
import { FarmerAddProduct } from './users/Farmer/FarmerProductUpload.js/FarmerAddProduct'
import { FarmerCurrentTaskPage } from './users/Farmer/farmersCurrentTask/FarmerCurrentTaskPage'
import FarmerLoginForm from './users/Farmer/FarmerLoginPage/FarmerLoginForm'
import { FarmerProductIndex } from './users/Farmer/farmerProduct/FarmerProductIndex'
import FarmerProfile from './users/Farmer/FarmerProfile/FarmerProfile'
import FarmerSigninForm from './users/Farmer/FarmerSignupPage/FarmerSigninForm'
import Farmerdashboard from './users/Farmer/FarmerDB/Farmerdashboard'
import Help from './pages/Help/Help'
import Home from './pages/Home/Home'
import OrderSummary from './pages/OrderSummary/OrderSummary'
import Spinner from './components/Loader/Spinner'
import { UsersSignIn } from './components/UsersSignIn/UsersSignIn'
import { UsersSignUp } from './components/UsersSignUp/UsersSignUp'
import { useEffect } from 'react'
import { useState } from 'react'

// import { BuyerProductCard } from './users/Buyer/BuyerProduct/BuyerProductCard'

import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import { AdminDashIndex } from "./users/Admin/adminDashboard copy/AdminDashIndex";
import { AdminLogisticsTask } from "./users/Admin/AdminDasboardTask/AdminLogisticsTask/AdminLogisticsTask";
import { AdminPaymentTask } from "./users/Admin/AdminDasboardTask/AdminPaymentTask/AdminPaymentTask";
import { AdminTaskNotification } from "./users/Admin/AdminTaskNotification/AdminTaskNotification";
import { Agroeducation } from "./pages/AgroEducation/AgroEducation";
import BrokerClientPage from "./users/Broker/BrokerClient/BrokerClientPage";
import BrokerDashboardPage from "./users/Broker/BrokerDashboard/BrokerDashboardPage";
import BrokerLoginForm from "./users/Broker/BrokerLoginPage/BrokerLoginForm";
import BrokerProfilePage from "./users/Broker/BrokerProfile/BrokerProfilePage";
import { BrokerRefferalPage } from "./users/Broker/BrokerRefferalPage/BrokerRefferalPage";
import BrokerSigninForm from "./users/Broker/BrokerSignupPage/BrokerSigninForm";
import { BuyerDashboardPage } from "./users/Buyer/BuyerDashboard/BuyerDashboardPage";
import BuyerLoginForm from "./users/Buyer/BuyerLoginPage/BuyerLoginForm";
import { BuyerOderreview } from "./users/Buyer/BuyerPayment/BuyerOderreview";
import { BuyerOrderSuccessful } from "./users/Buyer/BuyerPayment/BuyerOrderSuccessful";
import { BuyerPayment } from "./users/Buyer/BuyerPayment/BuyerPayment";
// import { BuyerProductCard } from "./users/Buyer/BuyerProduct/BuyerProductCard";
import BuyerProductPage from "./users/Buyer/BuyerProduct/BuyerProductPage";
import BuyerProfilePage from "./users/Buyer/BuyerProfile/BuyerProfilePage";
import { BuyerShipping } from "./users/Buyer/BuyerPayment/BuyerShipping";
import BuyerSigninPage from "./users/Buyer/BuyerSigninPage";
import Contact from "./pages/Contact/Contact";
import { FarmerAddProduct } from "./users/Farmer/FarmerProductUpload.js/FarmerAddProduct";
import { FarmerCurrentTaskPage } from "./users/Farmer/farmersCurrentTask/FarmerCurrentTaskPage";
import FarmerLoginForm from "./users/Farmer/FarmerLoginPage/FarmerLoginForm";
import { FarmerProductIndex } from "./users/Farmer/farmerProduct/FarmerProductIndex";
import FarmerProfile from "./users/Farmer/FarmerProfile/FarmerProfile";
import FarmerSigninForm from "./users/Farmer/FarmerSignupPage/FarmerSigninForm";
import Farmerdashboard from "./users/Farmer/FarmerDB/Farmerdashboard";
import { GenerateLink } from "./users/Admin/adminDashboard copy/GenerateLink";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import Spinner from "./components/Loader/Spinner";
import { useEffect } from "react";
import { useState } from "react";

// import { BrokerRefferalPage } from "./users/Broker/BrokerRefferalPage/BrokerRefferalPage";
// import BuyerProductPage from "./users/Buyer/BuyerProduct/BuyerProductPage";
import { UsersSignUp } from "./components/UsersSignUp/UsersSignUp";
import { UsersSignIn } from "./components/UsersSignIn/UsersSignIn";

function App() {
  const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 4000);
	}, []);
	return isLoading ? (
		<Spinner />
	) : (
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
				<Route exactt path='/generateLink' element={<GenerateLink />} />
				<Route
					exact
					path='/AdminTaskNotification'
					element={<AdminTaskNotification />}
				/>
				<Route exact path='/AdminPaymentTask' element={<AdminPaymentTask />} />
				<Route
					exact
					path='/AdminLogisticsTask'
					element={<AdminLogisticsTask />}
				/>
				<Route
					exact
					path='/brokerdashboard'
					element={<BrokerDashboardPage />}
				/>
				<Route exact path='/brokerclientpage' element={<BrokerClientPage />} />
				<Route
					exact
					path='/brokerrefferalpage'
					element={<BrokerRefferalPage />}
				/>
				<Route
					exact
					path='/brokerprofilepage'
					element={<BrokerProfilePage />}
				/>
				<Route
					exact
					path='/farmerdashboardpage'
					element={<Farmerdashboard />}
				/>
				<Route exact path='/farmerprofilepage' element={<FarmerProfile />} />
				<Route
					exact
					path='/farmerproductpage'
					element={<FarmerProductIndex />}
				/>
				<Route exact path='/farmeraddproduct' element={<FarmerAddProduct />} />
				<Route
					exact
					path='/farmercurrenttask'
					element={<FarmerCurrentTaskPage />}
				/>

        <Route
          exact
          path="/buyerdashboardpage"
          element={<BuyerDashboardPage />}
        />
        <Route exact path="/buyerprofilepage" element={<BuyerProfilePage />} />
        <Route exact path="/buyerproductpage" element={<BuyerProductPage />} />
        <Route exact path="/AdminDashIndex" element={<AdminDashIndex />} />
        <Route
          exact
          path="/AdminLogisticsTask"
          element={<AdminLogisticsTask />}
        />
        <Route
          exact
          path="/AdminLogisticsTask"
          element={<AdminLogisticsTask />}
        />
        <Route
          exact
          path="/AdminLogisticsTask"
          element={<AdminLogisticsTask />}
        />
        {/* New routes added */}
        <Route path="BuyerPayment" element={<BuyerPayment />} />
        <Route path="BuyerOrderreview" element={<BuyerOderreview />} />
        {/*<Route path='PaymentProcessing' element={<PaymentProcess />} />*/}
        <Route path="BuyerOrderSuccesful" element={<BuyerOrderSuccessful />} />
        <Route path="BuyerShipping" element={<BuyerShipping />} />
        <Route path="OrderSummary" element={<OrderSummary />} />
        <Route path="UsersSignUp" element={<UsersSignUp />} />
        <Route path="UsersSignIn" element={<UsersSignIn />} />
      </Routes>
    </div>
  )
}

export default App
