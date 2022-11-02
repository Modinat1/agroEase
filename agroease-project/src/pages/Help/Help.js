import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar1/Navbar1'
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
        <section className="faq-question-wrapper">
          {/* first question card */}
          <div className="faq-question-card ques-use">
            <div className="faq-question-text">
              <p>How much Produce can be purchased on the platform</p>
            </div>
            <div className="faq-question-icon">
              <button className="faq-plus-btn" id="plus-btn-1"><i className="fa-solid fa-plus" /></button>
              <button className="faq-minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="faq-answer-text ques-use">
            <p className="faq-answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</p>
          </div>
          {/* second question card */}
          <div className="faq-question-card ques-use">
            <div className="faq-question-text">
              <p>How much Produce can be purchased on the platform</p>
            </div>
            <div className="faq-question-icon">
              <button className="faq-plus-btn" id="plus-btn-2"><i className="fa-solid fa-plus" /></button>
              <button className="faq-minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="faq-answer-text ques-use">
            <p className="faq-answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</p>
          </div>
          {/* Third question card */}
          <div className="faq-question-card ques-use">
            <div className="faq-question-text">
              <p>How much Produce can be purchased on the platform</p>
            </div>
            <div className="faq-question-icon">
              <button className="faq-plus-btn" id="plus-btn-3"><i className="fa-solid fa-plus" /></button>
              <button className="faq-minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="faq-answer-text ques-use">
            <p className="faq-answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</p>
          </div>
          {/* Fourth question card */}
          <div className="faq-question-card ques-use">
            <div className="faq-question-text">
              <p>How much Produce can be purchased on the platform</p>
            </div>
            <div className="faq-question-icon">
              <button className="faq-plus-btn" id="plus-btn-4"><i className="fa-solid fa-plus" /></button>
              <button className="faq-minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="faq-answer-text ques-use">
            <p className="faq-answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</p>
          </div>
          {/* Fifth question card */}
          <div className="faq-question-card ques-use">
            <div className="faq-question-text">
              <p>How much Produce can be purchased on the platform</p>
            </div>
            <div className="faq-question-icon">
              <button className="faq-plus-btn" id="plus-btn-5"><i className="fa-solid fa-plus" /></button>
              <button className="faq-minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="faq-answer-text ques-use">
            <p className="faq-answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</p>
          </div>
        </section>
      </section>
      {/* END OF MAIN */}



        <Footer />

    </div>
  )
}

export default Help