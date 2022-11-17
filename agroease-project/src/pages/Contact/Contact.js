import ContactUs from './ContactUs'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar1/Navbar1'
import React from 'react'

// import ContactUsModal from "./ContactUsModal";

const Contact = () => {
  return (
    <div>
      <Navbar1 />
      <ContactUs />
      <Footer />
      {/* <ContactUsModal /> */}
    </div>
  )
}

export default Contact
