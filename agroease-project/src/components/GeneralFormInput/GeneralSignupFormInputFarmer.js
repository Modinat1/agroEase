import React from 'react'
import { Formik } from 'formik';
import Loginschema from '../Yup/Schema/LoginValidation';
import "./GeneralSignupFormInput.css"
import CreateAccountBottonFarmer from '../Button/CreateAccountBottonFarmer';
import { useNavigate } from 'react-router-dom';

const GeneralSignupFormInputFarmer = () => {
    const navigate = useNavigate()
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
  
          
          validationSchema={Loginschema}


          validate={(values) => {
              const {firstname, lastname, email, password} = values;
  
              // "key": errorMessage
              const errors = {}
              if(!firstname) (errors.firstname = <small className='text-red-500'>Firstname cannot be empty</small>)
  
              if(!lastname) (errors.lastname = <small className='text-red-500'>Lastname cannot be empty</small>)
      
              if(!email) (errors.email = <small className='text-red-500'>Email cannot be empty</small>)
  
              if(!password) (errors.password = <small className='text-red-500'>Password cannot be empty</small>)
  
              return errors
          }}
  
          // onsubmitting
          onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log((JSON.stringify(values, null, 2)));
                setSubmitting(false);
                resetForm()
                navigate("/farmerlogin")
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
                          name='firstname'
                          value={values.firstname}
                          onChange={handleChange}
                  />
                  {errors.firstname && touched.firstname && errors.firstname}
              </div>
              <div  className='flex-col'>
                  <label>Lastname</label>
                  <input 
                          type="text"
                          name='lastname'
                          value={values.lastname}
                          onChange={handleChange}
                  />
                  {errors.lastname && touched.lastname && errors.lastname}
                  
              </div>
              <div className='flex-col'>
                  <label>Email</label>
                  <input 
                          type="email"
                          name='email'
                          value={values.email}
                          onChange={handleChange}
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
              <CreateAccountBottonFarmer 
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

export default GeneralSignupFormInputFarmer