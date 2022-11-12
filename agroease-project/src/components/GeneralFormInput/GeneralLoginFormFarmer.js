import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogInAccountButtonFarmer from '../Button/LogInAccountButtonFarmer'
import LogininSchema from '../Yup/Schema/LogininSchema'
import "./GeneralSignupFormInput.css"

const GeneralLoginFormFarmer = () => {
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
        onSubmit={(values, { setSubmitting, resetForm}) => {
            setTimeout(() => {
              console.log((JSON.stringify(values, null, 2)));
              setSubmitting(false)
              resetForm()
              navigate("/farmerdashboardpage")
            }, 4000)
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

                <LogInAccountButtonFarmer
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

export default GeneralLoginFormFarmer