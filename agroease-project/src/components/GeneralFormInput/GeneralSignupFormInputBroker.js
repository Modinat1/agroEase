import React, { useContext } from 'react'
import { Formik } from 'formik';
// import axios from "axios";
import Loginschema from "../Yup/Schema/LoginValidation"
import "./GeneralSignupFormInput.css"
import CreateAccountBottonBroker from '../Button/CreateAccountBottonBroker';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../Context/user-context/user.service';
// import { useState } from 'react';
import UserContext from '../../Context/user-context/UserContext';




const GeneralSignupFormInputBroker = () => {

    const {users} = useContext(UserContext)
    const navigate = useNavigate()

  
    // handle registration function
    const handleUserRegistration =(values)=> {
      console.log(users)
      UserServices.registerBrokerUser(values).then((users) => {
      console.log(users)
    })
  }


    // const fetchToken =(token)=> {
    //   UserServices.getToken(token).then((users) => {
    //     console.log(users)
    //     if(token) {
    //         navigate('/brokerlogin')
    //         console.log('congratulations')
    //     }
    //   })
    // }
    
  return (
    
    <div>
      
    <Formik
       initialValues={
        { 
            firstName: '',
            lastName: '',
            email: '', 
            password: '',
            // role: "Broker"
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
            setTimeout(() => {
              console.log((JSON.stringify(values, null, 2)));
              setSubmitting(false);
              resetForm()
              handleUserRegistration(values)
              navigate("/brokerlogin")
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