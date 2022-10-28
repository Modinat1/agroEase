import React from 'react'
import "./ContactUsModal.css"
 const ContactUsModal = () => {
  return (
    <React.Fragment>

 {/* ---------------OVERLAY */}
 <div id="pop-up-modal">
        <div id="contact-thanks">
          <h3 className="thanks-h3">Thank You For Contacting Us</h3>
          <button className="contact-close" id="close-modal">Close</button>
        </div>
        <div id="overlay" />
      </div>

    </React.Fragment>
  )
}

export default ContactUsModal