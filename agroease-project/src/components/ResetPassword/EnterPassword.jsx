
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ResetPassword.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Navbar1 from '../Navbar1/Navbar1'
import { useSearchParams } from "react-router-dom"



const SignupSchema = Yup.object().shape({
  password: Yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),

});


export const EnterPassword = () => {
 
  const [searchParams] = useSearchParams();
  let token = searchParams.get("token");
  console.log(token);
	const notifySuccess = () => {
		Swal.fire({
			title: "Successful!",
			text: "New Password created successfully!",
			icon: "success",
			button: "Ok",
		}).then(function () {
			// Redirect the user
			window.location.href = "/UsersSignIn";
		});
  };
  const notifyError = () => {
    toast.error("Wrong Entry!", {
      position: toast.POSITION.TOP_CENTER,
			className: 'toast-message',
    });
  };

  return (
		<>
          <Formik
					 
            initialValues={{
              password: "",
						
						}
					}
           
			
					validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const { password } = values;
              setSubmitting(true);
              try {
                 await axios.post(
                  `https://agro-ease-backend.herokuapp.com/v1/auth/reset-password?token=${token}`,
                  { password }
                );
                // console.log(response.data);

                notifySuccess();
							
              } catch (error) {
                 notifyError();
								
                // console.log(error);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              // handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (        
	
		<form >
					
		<Navbar1/>
	
				 <div className='reset_password_form'>
					<h2 className='reset_password_form_title'>Create a New Password</h2>
						<label >Password</label>
	 					<input
								type="password"
								name="password"
								placeholder="Enter a new Password"
								onChange={handleChange}
								value={values.password}
								/>
							  <div className='errors'>{errors.password && touched.password && errors.password}</div>
							
								<button className='reset_btn' type="submit"  onClick={handleSubmit}
                      disabled={isSubmitting}>
									     {isSubmitting ? "loading..." : "continue"}
								</button>
								</div>
						</form>
							)}
							  </Formik>
								
									<ToastContainer />							
							</>							
  );
}
