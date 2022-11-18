import "./ContactUsModal.css"

// import React from 'react'

const ContactUsModal = ({ isModalClose, refresh }) => {
  return (
    <>

 {/* ---------------OVERLAY */}
 <div id="pop-up-modal">
        <div id="contact-thanks">
          <h3 className="thanks-h3">Thank You For Contacting Us</h3>
          <button className="contact-close" id="close-modal"
           onClick={(isModalClose, refresh)}
          >Close
          </button>
        </div>
        <div id="overlay" />
      </div>

    </>
  )
}

export default ContactUsModal