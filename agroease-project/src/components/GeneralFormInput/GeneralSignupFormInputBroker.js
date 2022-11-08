import React from 'react'
import { Formik } from 'formik';
import axios from "axios";
import Loginschema from "../Yup/Schema/LoginValidation"
import "./GeneralSignupFormInput.css"
import CreateAccountBottonBroker from '../Button/CreateAccountBottonBroker';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GeneralSignupFormInputBroker = () => {

    const [success, setSuccess] = useState(null)

    const navigate = useNavigate()
  return (
    <div>

    <Formik
       initialValues={
        { 
            id: crypto.randomUUID(),
            firstName: '',
            lastName: '',
            email: '', 
            password: '',
            role: "Broker"
        }}

        validationSchema={Loginschema}

        
        validate={(values) => {
            const {firstName, lastName, email, password} = values;

            // "key": errorMessage
            const errors = {}
            if(!firstName) (errors.firstName = <small className='text-red-500'>Firstname cannot be empty</small>)

            if(!lastName) (errors.lastName = <small className='text-red-500'>Lastname cannot be empty</small>)
    
            if(!email) (errors.email = <small className='text-red-500'>Email cannot be empty</small>)

            if(!password) (errors.password = <small className='text-red-500'>Password cannot be empty</small>)

            return errors
        }}

        // onsubmitting
        onSubmit={ async (values, { setSubmitting, resetForm }) => {
          const {...data} = values
            setTimeout(() => {
              console.log((JSON.stringify(values, null, 2)));
              setSubmitting(false);
              resetForm()
              navigate("/brokerlogin")
              
            }, 4000);
          
            const response = await axios.post("http://localhost:8000/v1/auth/register", data)
            .catch((err) => {
              if(err && err.response) {
                console.log("Error", err)
              }

              if(response && response.data) {
                setSuccess(response.data.message)
                console.log(success)
              }
            }
  )}}
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
            <small className="form-success-mes">{success? "The registration is successful" : ""}</small>
        <form>
            <div  className='flex-col' id={values.id}>
                <label>Firstname</label>
                <input 
                        type="text"
                        name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                />
                {errors.firstName && touched.firstName && errors.firstName}
            </div>
            <div  className='flex-col'>
                <label>Lastname</label>
                <input 
                        type="text"
                        name='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                />
                {errors.lastName && touched.lastName && errors.lastName}
                
            </div>
            <div className='flex-col'>
                <label>Email</label>
                <input 
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        // emailch={values.email}
                />
                {errors.email && touched.email && errors.email}
            </div>
            <div className='flex-col'>
                <label>Password</label>
                <input 
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                />
                {errors.password && touched.password && errors.password}
            </div>
            <CreateAccountBottonBroker 
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

export default GeneralSignupFormInputBroker

//  