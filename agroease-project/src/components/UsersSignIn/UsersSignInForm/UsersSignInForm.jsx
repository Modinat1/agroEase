import React from 'react'
import { useFormik } from 'formik'
import './UsersSignInForm.css'
import { SellerSignUpBtn } from '../../UsersButton/Seller_Btn/SellerSignUpBtn'
import { BuyerSignUpBtn } from '../../UsersButton/Buyer_Btn/BuyerSignUpBtn'
import { BrokerSignUpBtn } from '../../UsersButton/Broker_Btn/BrokerSignUpBtn'

export const UsersSignInForm = () => {
    const validate = values => {
        const errors = {};
        
         if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if (!values.password) {
     errors.password = 'Required';
   } else if (values.password.length < 8) {
     errors.password = 'Must be 8 characters or more';
   }
    }
      const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <div className='user_signin_form'>
        <form onSubmit={formik.handleSubmit}>
     <h2 className='user_signin_form_title'>Welcome to AgroEase</h2>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder='Email*'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div style={{"color" : "red"}}>{formik.errors.email}</div> : null}

        <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder='Password*'
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? <div style={{"color" : "red"}}>{formik.errors.password}</div> : null}
    <button className='user_signin_btn' type="submit">SignIn</button>
    <div className='reset_password_div'>
      <a href="#">Reset Password</a>
      <a href="#">Forgot Password</a>
    </div>

      <h4 className='or'>OR</h4>

    <div className='signUp_Btns'>
      <SellerSignUpBtn/>
      <BuyerSignUpBtn/>
      <BrokerSignUpBtn/>
      </div>

        </form>
    </div>
    </React.Fragment>
  )
}
