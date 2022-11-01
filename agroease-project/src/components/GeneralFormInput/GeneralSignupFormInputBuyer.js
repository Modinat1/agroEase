import React from 'react'
import { Formik } from 'formik';
import "./GeneralSignupFormInput.css"
import CreateAccountBottonBuyer from '../Button/CreateAccountBottonBuyer';

const GeneralSignupFormInputBuyer = () => {
  return (
    <div>

    <Formik
       initialValues={
        { 
            id: crypto.randomUUID(),
            firstname: '',
            lastname: '',
            email: '', 
            password: '' 
        }}

        onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log((JSON.stringify(values, null, 2)));
              setSubmitting(false);
              resetForm()
            }, 4000);
          }}
        >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleReset,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (

        <React.Fragment>
            {/* <pre>{JSON.stringify(values, 2, null)}</pre> */}
        <form action='/brokerlogin'>
            <div  className='flex-col' id={values.id}>
                <label>Firstname</label>
                <input 
                        type="text"
                        name='firstname'
                        value={values.firstname}
                        onChange={handleChange}
                />
            </div>
            <div  className='flex-col'>
                <label>Lastname</label>
                <input 
                        type="text"
                        name='lastname'
                        value={values.lastname}
                        onChange={handleChange}
                />
            </div>
            <div className='flex-col'>
                <label>Email</label>
                <input 
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                />
            </div>
            <div className='flex-col'>
                <label>Password</label>
                <input 
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                />
            </div>
            <CreateAccountBottonBuyer
                isSubmitting={isSubmitting} 
                handleSubmit={handleSubmit} 
                handleReset={handleReset} />
        </form>
        </React.Fragment>
      )}
    </Formik>
    </div>
  )
}

export default GeneralSignupFormInputBuyer