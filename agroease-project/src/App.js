
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
import { Agroeducation } from './pages/AgroEducation/AgroEducation';
import FarmerSigninForm from './users/Farmer/FarmerSignupPage/FarmerSigninForm';
import BrokerSigninForm from './users/Broker/BrokerSignupPage/BrokerSigninForm';
import BuyerSigninForm from './users/Buyer/BuyerSignupPage/BuyerSigninForm';
import Account from './pages/Account/Account';
import BrokerLoginForm from './users/Broker/BrokerLoginPage/BrokerLoginForm';

function App() {
  return (
    <div>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/blog" element={<Agroeducation />}/>
      <Route exact path="/help" element={<Help />}/>
      <Route exact path="/" element={<Account />} />
      <Route exact path="/buyersignup" element={<BuyerSigninForm />}/>
      <Route exact path="/farmersignup" element={<FarmerSigninForm />}/>
      <Route exact path="/brokersignup" element={<BrokerSigninForm />}/>
      <Route exact path="/brokerlogin" element={<BrokerLoginForm />} />
    </Routes>

    </div>
  );
}

export default App;
