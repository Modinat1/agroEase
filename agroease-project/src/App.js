import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/blog" element={<Blog />}/>
      <Route exact path="/help" element={<Help />}/>
      {/* <Route exact path="/account" element={<Account />}/> */}
    </Routes>
    </div>
  );
}

export default App;
