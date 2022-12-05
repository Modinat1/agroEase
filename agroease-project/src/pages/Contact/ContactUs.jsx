import './Contact.css'

import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import ContactUsModal from './ContactUsModal'
import { Formik } from 'formik'
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
            <div className="contact-us-page-marker">
              <HiOutlineLocationMarker />
            </div>
            
            <h4 className=" Wuse-Zone-6"> Tech Specialist, Wuse Zone 6 </h4>
          </div>
          
          <div className="contact-number">
            <div className="contact-us-page-phone">
              <AiOutlinePhone />
            </div>

            <h4> 08082957336, 08082957336</h4>
            {/* <h4> </h4> */}
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
          <Formik
            initialValues={{ email: '', name: '', tel: '', message: '' }}
            validate={(values) => {
              const errors = {}

              if (!values.name) {
                errors.name = <span style={{color:'red'}}>required</span>
              }

              if (!values.email) {
                errors.email = <span style={{color:'red'}}>required</span>
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = <span style={{color:'red'}}>Invalid email address</span>
              }

              if (!values.tel) {
                errors.tel = <span style={{color:'red'}}>required</span>
              } else if (
                !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
                  values.tel
                )
              ) {
                errors.email = <span style={{color:'red'}}>Invalid number</span>
              }
              if (!values.message) {
                errors.message = <span style={{color:'red'}}>required</span>
              }

              return errors
            }}
            onSubmit={(values, handleSubmit) => {
              setModalIsCloseToTrue()
              console.log(values)
              console.log(handleSubmit)

              // setTimeout(() => {
              //  alert(JSON.stringify(values, null, 2))
              // setSubmitting(false)
              // }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contactRequest-form"> Request Form </h2>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="contact-page-input"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                {errors.name && touched.name &&  errors.name}
                <input
                  type="email"
                  placeholder=" Email"
                  name="email"
                  id="email"
                  className="contact-page-input"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="tel"
                  placeholder="Phone"
                  name="tel"
                  id="tel"
                  className="contact-page-input"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                />

                {errors.tel && touched.tel && errors.tel}
                <textarea
                  id="contact-textarea"
                  name="message"
                  rows={10}
                  cols={65}
                  placeholder="Message..."
                  required
                  //  defaultValue={''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && errors.message}
                <button
                  className="contact-button"
                  type="submit"
                  disabled={isSubmitting}

                  // onClick={setModalIsCloseToTrue}
                >
                  Send Message
                </button>
              </form>
            )}
          </Formik>
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
