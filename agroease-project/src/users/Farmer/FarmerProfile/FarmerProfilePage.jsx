import React, { useEffect } from "react";
import "./FarmerProfile.css";
import { useFormik } from "formik";
import Swal from "sweetalert2-react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserAuth from "../../../Context/user-auth/UserAuthContext";
import * as Yup from "yup";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
// import UserContext from "../../../Context/user-context/UserContext";

export const FarmerProfilePage = () => {
	const { userAuth, setUserAuth, user, setUser } = useContext(UserAuth);
	// const [errorso, setErrorso] = useState("")
	const [successo, setSuccesso] = useState("");
	const { accessToken, refreshToken } = userAuth;
	const navigate = useNavigate();

	const [banks, setBanks] = useState([]);

	// Get State Function

	useEffect(() => {
		const getState = () => {
			try {
				const response = axiosInstance.get("/v1/wallet/banks").then((res) => {
					setBanks(res.data);
					return res.data;
				});
				return response;
			} catch (error) {
				console.log(error);
			}
		};

		getState();
	}, []);

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	const handleStoreSubmit = async (values) => {
		const {
			account_name,
			account_number,
			bank,
			business_email,
			business_name,
			business_number,
			date_of_birth,
			description,
			farmer_image,
			nin,
		} = values;
		const businessInfo = {
			store: {
				name: business_name,
				description,
				business_email,
				phone_number: business_number,
				farmer_image,
				store_image: "sample.jpg",
			},

			wallet: {
				account_number,
				bank,
				account_name,
				nin,
				date_of_birth,
			},
		};
		console.log(values);
		console.log(businessInfo);
		try {
			const response = await axiosInstance.post(
				"v1/store",
				businessInfo,
				config
			);
			const accessToken = response.data.tokens.access.token;
			setUserAuth({ accessToken });
			setUser(response.data.user);
			// JSON.parse(localStorage.setItem('token', accessToken))
			setSuccesso("Account Created Successfully");

			// notifySuccess();

			if (userAuth) {
				navigate("/UsersSignIn");
			}
		} catch (error) {
			console.log(error);
			// if (!error.response) {
			// 	console.log("Server down")
			// } else if (error.response.status === 400) {
			// 	console.log('I don see good things')
			// 	setErrorso("User Already Exists")
			// } else if (error.response.status === 401) {
			// 	console.log('I don see enough')
			// } else if (error.response.status === 409) {
			// 	console.log('I don see ')
			// }
		}
	};
	const initialValues = {
		store: {
			name: "",
			description: "",
			business_email: "",
			phone_number: "",
			farmer_image: "",
		},

		wallet: {
			account_number: "",
			bank: "",
			account_name: "",
			nin: "",
			date_of_birth: "",
		},
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Required").max(50),
		business_email: Yup.string().email().required("Required"),
		phone_number: Yup.string().required("Required").max(11),
		date_of_birth: Yup.date().required("Required"),
		description: Yup.string().required("Required").max(200),
		nin: Yup.string().required("Required").max(11),
		account_name: Yup.string().required("Required").max(50),
		bank: Yup.string().required("Required").max(50),
	});
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			handleStoreSubmit(values);
		},
	});
	return (
		<React.Fragment>
			<div className='farmer_profile_wrapper'>
				<div className='container-agro'>
					<div className='title-agro'>Personal details</div>
					<div className='content-agro'>
						<form action='' method='post' onSubmit={formik.handleSubmit}>
							<div className='user-details-agro'>
								<div className='input-box-agro'>
									<span className='details-agro'>Name</span>
									<input
										type='text'
										placeholder='Godswill Chibuzo'
										id='name'
										name='name'
										onChange={formik.handleChange}
										value={formik.values.name}
									/>
									{formik.errors.name ? (
										<div className='profile_error'>{formik.errors.name}</div>
									) : null}
								</div>
								<div className='input-box-agro'>
									<span className='details-agro'>Email</span>
									<input
										type='email'
										placeholder='buzor@gmail.com'
										id='business_email'
										name='business_email'
										onChange={formik.handleChange}
										value={formik.values.business_email}
									/>
									{formik.errors.business_email ? (
										<div className='profile_error'>
											{formik.errors.business_email}
										</div>
									) : null}
								</div>

								<div className='input-box-agro'>
									<span className='details-agro'>Phone Number</span>
									<input
										type='number'
										placeholder='08024536632'
										id='phone_number'
										name='phone_number'
										onChange={formik.handleChange}
										value={formik.values.phone_number}
									/>
									{formik.errors.phone_number ? (
										<div className='profile_error'>
											{formik.errors.phone_number}
										</div>
									) : null}
								</div>

								<div className='input-box-agro'>
									<span className='details-agro'>Upload Photo</span>
									<input
										type='file'
										placeholder='chose file'
										id='farmer_image'
										name='farmer_image'
										required
										multiple
										onChange={formik.handleChange}
										value={formik.values.farmer_image}
									/>
									{formik.errors.farmer_image ? (
										<div className='profile_error'>
											{formik.errors.farmer_image}
										</div>
									) : null}
								</div>
							</div>

							{/* Personal Address of the seller */}
							{/* <div className="Address-input-box-agro">
                <span className="details-agro">Address</span>
                <input 
                type="text" 
                placeholder="ikeja, lagos" 
                id="seller_address"
                name="seller_address"
                onChange={formik.handleChange}
                value={formik.values.seller_address}
                 />
                 {formik.errors.seller_address ? <div className="profile_error">{formik.errors.seller_address}</div> : null}
              </div> */}

							{/* Business Details Section */}
							<div className='title-agro'>Business details</div>
							<div className='user-details-agro'>
								<div className='input-box-agro'>
									<span className='details-agro'>Business Name</span>
									<input
										type='text'
										placeholder='Godswill & Sons Enterprise'
										id='business_name'
										name='business_name'
										onChange={formik.handleChange}
										value={formik.values.business_name}
									/>
									{formik.errors.business_name ? (
										<div className='profile_error'>
											{formik.errors.business_name}
										</div>
									) : null}
								</div>
								<div className='input-box-agro'>
									<span className='details-agro'>Business Email</span>
									<input
										type='email'
										placeholder='buzor@gmail.com'
										id='business_email'
										name='business_email'
										onChange={formik.handleChange}
										value={formik.values.business_email}
									/>
									{formik.errors.business_email ? (
										<div className='profile_error'>
											{formik.errors.business_email}
										</div>
									) : null}
								</div>

								<div className='input-box-agro'>
									<span className='details-agro'>Business Phone Number</span>
									<input
										type='number'
										placeholder='08022346464'
										id='business_number'
										name='business_number'
										onChange={formik.handleChange}
										value={formik.values.business_number}
									/>
									{formik.errors.business_number ? (
										<div className='profile_error'>
											{formik.errors.business_number}
										</div>
									) : null}
								</div>

								<div className='input-box-agro'>
									<span className='details-agro'>Business Description</span>
									<input
										type='text'
										placeholder='Deals with all diary product'
										id='description'
										name='description'
										onChange={formik.handleChange}
										value={formik.values.description}
									/>
									{formik.errors.description ? (
										<div className='profile_error'>
											{formik.errors.description}
										</div>
									) : null}
								</div>

								<div className='input-box-agro'>
									<span className='details-agro'>
										National Identification Number (NIN)
									</span>
									<input
										type='number'
										placeholder='01234567890'
										id='nin'
										name='nin'
										onChange={formik.handleChange}
										value={formik.values.nin}
									/>
									{formik.errors.nin ? (
										<div className='profile_error'>{formik.errors.nin}</div>
									) : null}
								</div>

								{/* <div className="input-box-agro">
                  <span className="details-agro">Zip/Postal Code</span>
                  <input 
                  type="number" 
                  placeholder="0123456" 
                  id="zip_code"
                  name="zip_code"
                  onChange={formik.handleChange}
                  value={formik.values.zip_code}
                   />
                   {formik.errors.zip_code ? <div className="profile_error">{formik.errors.zip_code}</div> : null}
                </div> */}

								{/* <div className="input-box-agro">
                  <span className="details-agro">City</span>
                  <input 
                  type="text" 
                  placeholder="Lagos" 
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                   />
                   {formik.errors.city ? <div className="profile_error">{formik.errors.city}</div> : null}
                </div> */}
								{/* <div className="input-box-agro">
                  <span className="details-agro">State</span>
                  <input 
                  type="text" 
                  placeholder="Lagos" 
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                   />
                   {formik.errors.state ? <div className="profile_error">{formik.errors.state}</div> : null}
                </div> */}
							</div>

							{/*Business Address */}
							{/* <div className="Address-input-box-agro">
                <span className="details-agro">Business Address</span>
                <input 
                type="text" 
                placeholder="Business address" 
                id="business_address"
                name="business_address"
                onChange={formik.handleChange}
                value={formik.values.business_address}
                 />

                 {formik.errors.business_address ? <div className="profile_error">{formik.errors.business_address}</div> : null}
              </div> */}

							{/* Account Details Section */}
							<div className='title-agro'>Account details</div>
							<div className='user-details-agro'>
								<div className='input-box-agro'>
									<span className='details-agro'>Account Name</span>
									<input
										type='text'
										placeholder='Godswill & Sons Enterprise'
										id='account_name'
										name='account_name'
										onChange={formik.handleChange}
										value={formik.values.account_name}
									/>
									{formik.errors.account_name ? (
										<div className='profile_error'>
											{formik.errors.account_name}
										</div>
									) : null}
								</div>
								<div className='input-box-agro'>
									<span className='details-agro'>Account Number</span>
									<input
										type='number'
										placeholder='0123456789'
										id='account_number'
										name='account_number'
										onChange={formik.handleChange}
										value={formik.values.account_number}
									/>
									{formik.errors.account_number ? (
										<div className='profile_error'>
											{formik.errors.account_number}
										</div>
									) : null}
								</div>
								<div className='input-box-agro'>
									<span className='details-agro'>Bank Name</span>
									<select
										type='text'
										id='bank'
										className='p-2 border-gray-700 w-full outline-gray-700'
										name='bank'
										onChange={formik.handleChange}
										value={formik.values.bank}>
										{banks.map((bank, idx) => {
											return (
												<option key={idx} value={bank}>
													{bank}
												</option>
											);
										})}
									</select>
									{/* <input
										type='text'
										placeholder='First Bank'
										id='bank'
										name='bank'
										onChange={formik.handleChange}
										value={formik.values.bank}
									/> */}
									{formik.errors.bank ? (
										<div className='profile_error'>{formik.errors.bank}</div>
									) : null}
								</div>
								<div className='input-box-agro'>
									<span className='details-agro'>Date of Birth</span>
									<input
										type='date'
										placeholder='24-11-2022'
										id='date_of_birth'
										name='date_of_birth'
										onChange={formik.handleChange}
										value={formik.values.date_of_birth}
									/>
									{formik.errors.date_of_birth ? (
										<div className='profile_error'>
											{formik.errors.date_of_birth}
										</div>
									) : null}
								</div>
							</div>

							{/* <div className="agree-terms-agro">
                <input 
                type="checkbox" 
                name="policy_terms" 
                id="policy_terms" 
                onChange={formik.handleChange}
                value={formik.values.policy_terms}

                />
                
                <p>
                  by clicking,you agree to AgroEase's
                  <span>Terms of Service</span> and acknowledge that AgroEase's{" "}
                  <span>Private Policy </span> applies to you.
                </p>
                <p>{formik.errors.policy_terms ? <div className="profile_error">{formik.errors.policy_terms}</div> : null}</p>
              </div> */}
							<div className='Address-container-agro'>
								<div className='button-agro'>
									<button type='submit'>Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
