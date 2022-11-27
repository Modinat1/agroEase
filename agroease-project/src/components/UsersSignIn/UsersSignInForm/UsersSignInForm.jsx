import React from "react";
import { Formik, useFormik } from "formik";
import "./UsersSignInForm.css";
import { SellerSignUpBtn } from "../../UsersButton/Seller_Btn/SellerSignUpBtn";
import { BuyerSignUpBtn } from "../../UsersButton/Buyer_Btn/BuyerSignUpBtn";
import { BrokerSignUpBtn } from "../../UsersButton/Broker_Btn/BrokerSignUpBtn";
import { Link, useNavigate } from "react-router-dom";
import LogininSchema from "../../Yup/Schema/LogininSchema";

export const UsersSignInForm = () => {
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
			<div className='user_signin_form'>
				<form>
					<h2 className='user_signin_form_title'>Welcome to AgroEase</h2>
					<label >Email Address</label>
					<input
						id='email'
						name='email'
						type='email'
						placeholder='Email*'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.email && touched.email && errors.email}

					<label>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						placeholder='Password*'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}

					<button 
							className='user_signin_btn' 
							type='button'
							disabled={isSubmitting}
              				onClick={handleSubmit}
							>
								{
									isSubmitting? ( "Submitting...") : ("SignIn")
								}
					</button>
					<div className='reset_password_div'>
						<Link to={"/resetPassword"}>Reset Password</Link>
						<Link to={"/forgetPassword"}>Forgot Password</Link>
					</div>

					<h4 className='or'>OR</h4>

					<div className='signUp_Btns'>
						<Link to={"/UsersSignUp"}>
							<SellerSignUpBtn />
						</Link>
						<Link to={"/UsersSignUp"}>
							<BuyerSignUpBtn />
						</Link>
						<Link to={"/UsersSignUp"}>
							<BrokerSignUpBtn />
						</Link>
					</div>
				</form>
			</div>
		</React.Fragment>
		 )}
		 </Formik>
		</div>
	);
};
