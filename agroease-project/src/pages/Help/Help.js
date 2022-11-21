import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar1/Navbar1'
import { FaqItems } from './FaqItems'
// import { FaqItems } from './FaqItems'
import './Help.css'

const Help = () => {
  return (
    <div>
        <Navbar1 />
        		    {/* START OF MAIN */}
				<section className="faq-main-section container">
        <div className="searchresults">
          <ul id="searchlist">
          </ul>
        </div>
        <section className="faq-head-text">
          <h4>Help &amp; FAQs</h4>
        </section>
        <FaqItems />

        
      </section>
      {/* END OF MAIN */}



        <Footer />

    </div>
  )
}

export default Help