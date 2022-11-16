import './Contact.css'

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import ContactUsModal from './ContactUsModal'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useState } from 'react'

// import contactEmail from '../../images/contactEmail.png'
// import contactMap from '../../images/contactMap.png'
// import contactPhone from '../../images/contactPhone.png'

// import { BsLine } from "react-icons/bs"

const ContactUs = () => {
  // const style = { color: '#097c0d', fontSize: '5rem' }


  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const setModalIsCloseToTrue = () => {
    setModalIsOpen(!modalIsOpen)
  }


  function refreshPage() {
    window.location.reload(false)
  }
  return (
    <div>
      <section className="contact-container">
        <h1 className="contact-heading"> Contact Us</h1>
        <div className="contact-findUs">
          <div className="contact-location">

            <div className='contact-us-page-marker'>
            <HiOutlineLocationMarker />
            </div>
            <h4 className=" Wuse-Zone-6"> Tech Specialist, Wuse Zone 6 </h4>
          </div>
          <div className="contact-number">
            <div className="contact-us-page-phone">
              <AiOutlinePhone />
            </div>

            <h4> 08082957336,</h4>
            <h4> 08082957336</h4>
          </div>
          <div className="contact-email">
            <div className="contact-us-email">
              <AiOutlineMail />
            </div>

            <h4> agroease@gmail.com</h4>
          </div>
        </div>
        {/* Form */}
        <div className="form-container">
          <form className="contact-form">
            <h2 className="contactRequest-form"> Request Form </h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="contact-page-input"
              required
            />
            <input
              type="email"
              placeholder=" Email"
              name="email"
              id="email"
              className="contact-page-input"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              name="tel"
              id="tel"
              className="contact-page-input"
              required
            />
            <textarea
              id="contact-textarea"
              name="contact-textarea"
              rows={10}
              cols={65}
              placeholder="Message..."
              required
              defaultValue={''}
            />
            <button className="contact-button" type="button"
             onClick={setModalIsCloseToTrue}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {modalIsOpen ? (
        <ContactUsModal
          isModalClose={setModalIsCloseToTrue}
          refresh={refreshPage}
        />
      ) : null}
    </div>
  )
}

export default ContactUs
