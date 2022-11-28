
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ResetPassword.css'
import { Formik } from 'formik';
import Navbar1 from '../Navbar1/Navbar1'


export const ResetPassword = () => {
  //const navigate = useNavigate();
  const notifySuccess = () => {
    toast.success("Reset Link has been sent to your email!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notifyError = () => {
    toast.error("Email not found !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
		<>
            <Formik 
                 initialValues={{
									email: "",
								}}
								// validationSchema={SignupSchema}
								onSubmit={async (values, { setSubmitting }) => {
									const { email } = values;
									setSubmitting(true);
									try {
										await axios.post(
											"https://agro-ease-herokuapp.com/v1/auth/forgot-password",
											{
												email,
											}
										);
										notifySuccess();
										// navigate("/check-mail");
									} catch (error) {
										notifyError();
									}
								}}
							>
								{({
									values,
									errors,
									touched,
									handleChange,
									handleSubmit,
									isSubmitting,
									/* and other goodies */
								}) => (        
	
		<form >
					
		<Navbar1/>
	
				 <div className='reset_password_form'>
					<h2 className='reset_password_form_title'>Reset Password</h2>
						<label >Email Address</label>
	 					<input
								type="email"
								name="email"
								placeholder="johndoe@mail.com"
								onChange={handleChange}
								value={values.email}
								/>
								{/* <div className='errors'>{errors.email && touched.email && errors.email}</div> */}
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
