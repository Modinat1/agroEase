import React from 'react';
import { Formik } from 'formik';
import './AdminNotificationModal.css'

export const AdminNotificationModal = ({setShowModal}) => (
  <div>
    <Formik
      initialValues={{id: '', name: '', email: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          <div className='darkBG'>
        <div className="AdminNotificationModalContainer">

        <form className='AdminNotificationModal' onSubmit={handleSubmit}>
          <button className='AdminModalCancelBtn' onClick={() => setShowModal(false)}>X</button>
        <h3>Notification sheet</h3>
            <div className='form-group'>
                <label htmlFor="id">Id</label>
                 <input
            type="number"
            name="id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
          />
          {errors.id && touched.id && errors.id}
            </div>
         
         <div className="form-group">
            <label htmlFor="">Name</label>
            <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
         </div>

          <div className='form-group'>
                <label htmlFor="email">Email</label>
                 <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.id}
          />
          {errors.email && touched.email && errors.email}
            </div>
          
            
            <div className='form-group'>
            <label htmlFor="email">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}>Message</textarea>
        
          {/* {message.email && message.email && message.email} */}
            </div>
          
          <div className='AdminModalBtnContainer'>

          <button className='AdminModalBtn cancel' type="submit" disabled={isSubmitting}>
            cancel
          </button>
          <button className='AdminModalBtn send' type="submit" disabled={isSubmitting}>
            Send
          </button>
          </div>
        </form>
        </div>
        </div>
      )}
    </Formik>

  </div>
);

