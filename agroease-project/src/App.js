
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import { Agroeducation } from "./pages/AgroEducation/AgroEducation";
import Account from "./pages/Account/Account";
// import BuyerSigninPage from "./users/Buyer/BuyerSigninPage";
import FarmerSigninForm from "./users/Farmer/FarmerSignupPage/FarmerSigninForm";
import BrokerSigninForm from "./users/Broker/BrokerSignupPage/BrokerSigninForm";
import BuyerLoginForm from "./users/Buyer/BuyerLoginPage/BuyerLoginForm";
import FarmerLoginForm from "./users/Farmer/FarmerLoginPage/FarmerLoginForm";
import BrokerLoginForm from "./users/Broker/BrokerLoginPage/BrokerLoginForm";
import BrokerSignInPageForm from "./users/Broker/BrokerSignupPage/BrokerSigninFormCompo/BrokerSignInPageForm";
import About from "./pages/About/About";





function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Agroeducation />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/" element={<Account />} />
        <Route exact path="/buyersignup" element={<BrokerSignInPageForm />} />
        <Route exact path="/farmersignup" element={<FarmerSigninForm />} />
        <Route exact path="/brokersignup" element={<BrokerSigninForm />} />
        <Route exact path="/buyerlogin" element={<BuyerLoginForm />} />
        <Route exact path="/farmerlogin" element={<FarmerLoginForm />} />
        <Route exact path="/brokerlogin" element={<BrokerLoginForm />} />
      </Routes>

    </div>
  );
}

export default App;
