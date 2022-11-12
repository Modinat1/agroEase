import { Formik } from 'formik';
import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LogInAccountButtonBroker from '../Button/LogInAccountButtonBroker';
import LogininSchema from '../Yup/Schema/LogininSchema';
import "./GeneralSignupFormInput.css";

const GeneralLoginFormBroker = () => {

  const navigate = useNavigate()
  return (
    <div>

      <Formik
        initialValues={
          {
            email: '',
            password: ''
          }
        }

        validationSchema={LogininSchema}

        validate={(values) => {
          const {email, password} = values

          //"Key": errorMesssage
          const errors = {}
          if(!email) (errors.email = <small className='text-red-500'>Email cannot be empty</small>)

          if(!password) (errors.password = <small className='text-red-500'>Password cannot be empty</small>)

          return errors
        }}

        //onSubmitting
        onSubmit={ async (values, { setSubmitting, resetForm}) => {
            setTimeout(() => {
              console.log((JSON.stringify(values, null, 2)));
              setSubmitting(false)
              resetForm()
              navigate("/brokerdashboard")
            }, 4000)

            const response = await axios.post("https://agro-ease-tiidelab.herokuapp.com/v1/auth/login", values)
            .then(res=> {
              console.log("Hi", response);
              console.log("Hello", response.data);
            //   window.location="/retrieve" 
            })

            .catch((err) => {
              if(err && err.response) {
                console.log("Error", err)
              }

              // if(response && response.data) {
              //   setSuccess(response.data.message)
              //   console.log(success)
              // }
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
        }) => (
          <React.Fragment>
            <form>
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

                <LogInAccountButtonBroker
                isSubmitting={isSubmitting} 
                handleSubmit={handleSubmit} 
               />
            </form>
        </React.Fragment>
        )}
        </Formik>
    </div>
  )
}

export default GeneralLoginFormBroker