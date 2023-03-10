import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import "./UsersSignInForm.css";
import { SellerSignUpBtn } from "../../UsersButton/Seller_Btn/SellerSignUpBtn";
import { BuyerSignUpBtn } from "../../UsersButton/Buyer_Btn/BuyerSignUpBtn";
import { BrokerSignUpBtn } from "../../UsersButton/Broker_Btn/BrokerSignUpBtn";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogininSchema from "../../Yup/Schema/LogininSchema";
import UserServices from "../../../Context/user-context/user.service";
import UserAuth from "../../../Context/user-auth/UserAuthContext";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import UserRefreshToken from "../../../Context/user-auth/UserRefreshToken";
import axios from "axios";

export const UsersSignInForm = () => {
	const { userAuth, setUserAuth, user, setUser, currentUser, setCurrentUser } =
		GeneralUserAuth();

	const [errorso, setErrorso] = useState("");
	const [successo, setSuccesso] = useState("");

	const navigate = useNavigate();
	const { accessToken } = userAuth;
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));

	// const config = {
	// 	headers: { Authorization: `Bearer ${accessToken}` },
	// };

	const userDetail= JSON.parse(localStorage.getItem("user"))
	const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"))
	const aToken = localStorage.getItem('token')
	//Config Access token bearer
	const config = {
		headers: { Authorization: `Bearer ${aToken}` },
	};

	


	const handleLoginAuth = async (values) => {
		try {
			// const response = await axiosInstance.post("/v1/auth/login", values);
			const response = await axios.post(
				"https://agro-ease-backend-production.up.railway.app/v1/auth/login",
				values
			);
			const accessToken = response.data.tokens.access.token;
			const refreshToken = response.data.tokens.refresh.token;
			const allUser = response.data.user;
			setUserAuth({ accessToken, refreshToken, values, allUser });
			setUser(response.data.user);
			localStorage.setItem("loginUserInfo", JSON.stringify(allUser));
			localStorage.setItem("token", accessToken);
			localStorage.setItem("rtoken", refreshToken);
			console.log(refreshToken)
			console.log(accessToken);

			if (allUser) {
				navigate(from, { replace: true });
			}
			setSuccesso("Account Created Successfully");


		} catch (error) {
			if (!error.response) {
				console.log("Server down");
			} else if (error.response.status === 400) {
				console.log("I don see enough shege");
			} else if (error.response.status === 401) {
				setErrorso("Incorrect Email or Password");
				console.log("I don see enough");
			} else if (error.response.status === 409) {
				console.log("I don see ");
			}
		}
	};

	// const tokenInfo = localStorage.getItem("token") || "";

	// const config = {
	// 	headers: { Authorization: `Bearer ${tokenInfo}` },
	// };

	
	return (
		<div>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={LogininSchema}
				validate={(values) => {
					const { email, password } = values;

					//"Key": errorMesssage
					const errors = {};
					if (!email)
						errors.email = (
							<small className='text-red-500'>Email cannot be empty</small>
						);

					if (!password)
						errors.password = (
							<small className='text-red-500'>Password cannot be empty</small>
						);

					return errors;
				}}
				//onSubmitting
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
						// console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
						handleLoginAuth(values);
						resetForm();
					}, 4000);
				}}>
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
								<small className='text-red-500 flex justify-center'>
									{errorso}
								</small>
								<small className='text-green-500 flex justify-center'>
									{successo}
								</small>
								<label>Email Address</label>
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
									onClick={handleSubmit}>
									{isSubmitting ? "Submitting..." : "SignIn"}
								</button>
								<div className='reset_password_div'>
									<Link to={"/resetPassword"}>Forgot Password</Link>
									{/* <Link to={"/forgetPassword"}>Forgot Password</Link> */}
								</div>

								<h4 className='or'>OR</h4>

								<div className='signUp_Btns'>
									{/* <Link to={"/UsersSignUp"}>
							<SellerSignUpBtn />
						</Link> */}

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
