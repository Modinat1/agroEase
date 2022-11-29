import React from "react";
import "./FarmerProfile.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FarmerProfilePage = () => {
  const initialValues = {
    seller_name: "",
    seller_email: "",
    seller_number: "",
    file: "",
    seller_address: "",
    business_name: "",
    business_email: "",
    business_number: "",
    business_desc: "",
    business_address: "",
    zip_code: "",
    nin: "",
    state: "",
    city: "",
    account_name: "",
    account_num: "",
    bank_name: "",
    dob: "",
    policy_terms: ""
  };
  
  const validationSchema = Yup.object({
    seller_name: Yup.string().required("Required").max(50),
    seller_email: Yup.string().email().required("Required"),
    seller_address: Yup.string().required("Required").max(600),
    seller_number: Yup.string().required("Required").max(11),
    dob: Yup.date().required("Required"),
    business_name: Yup.string().required("Required").max(50),
    business_email: Yup.string().email().required("Required"),
    business_number: Yup.string().required("Required").max(11),
    business_desc: Yup.string().required("Required").max(200),
    business_address: Yup.string().required("Required").max(600),
    zip_code: Yup.string().required("Required").max(11),
    nin: Yup.string().required("Required").max(11),
    state: Yup.string().required("Required").max(15),
    city: Yup.string().required("Required").max(15),
    account_name: Yup.string().required("Required").max(50),
    account_number: Yup.string().required("Required").max(10),
    bank_name: Yup.string().required("Required").max(50),
    policy_terms: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),

    
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <div className="farmer_profile_wrapper">
        <div className="container-agro">
          <div className="title-agro">Personal details</div>
          <div className="content-agro">
            <form action="" method="post" onSubmit={formik.handleSubmit}>
              <div className="user-details-agro">
                <div className="input-box-agro">
                  <span className="details-agro">Name</span>
                  <input
                    type="text"
                    placeholder="Godswill Chibuzo"
                    id="seller_name"
                    name="seller_name"
                    onChange={formik.handleChange}
                    value={formik.values.seller_name}
                  />
                  {formik.errors.seller_name ? <div className="profile_error">{formik.errors.seller_name}</div> : null}
                </div>
                <div className="input-box-agro">
                  <span className="details-agro">Email</span>
                  <input
                    type="email"
                    placeholder="buzor@gmail.com"
                    id="seller_email"
                    name="seller_email"
                    onChange={formik.handleChange}
                    value={formik.values.seller_email}
                  />
                  {formik.errors.seller_email ? <div className="profile_error">{formik.errors.seller_email}</div> : null}
                </div>

                <div className="input-box-agro">
                  <span className="details-agro">Phone Number</span>
                  <input
                    type="number"
                    placeholder="08024536632"
                    id="seller_number"
                    name="seller_number"
                    onChange={formik.handleChange}
                    value={formik.values.seller_number}
                  />
                   {formik.errors.seller_number ? <div className="profile_error">{formik.errors.seller_number}</div> : null}
                </div>

                <div className="input-box-agro">
                  <span className="details-agro">Upload Photo</span>
                  <input 
                  type="file" 
                  placeholder="chose file" 
                  id="file"
                  name="file"
                  required
                  multiple
                  onChange={formik.handleChange}
                  value={formik.values.file}
                  />
                   {formik.errors.file ? <div className="profile_error">{formik.errors.file}</div> : null}
                </div>
              </div>

              {/* Personal Address of the seller */}
              <div className="Address-input-box-agro">
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
              </div>

              {/* Business Details Section */}
              <div className="title-agro">Business details</div>
              <div className="user-details-agro">
                <div className="input-box-agro">
                  <span className="details-agro">Business Name</span>
                  <input
                    type="text"
                    placeholder="Godswill & Sons Enterprise"
                    id="business_name"
                    name="business_name"
                    onChange={formik.handleChange}
                    value={formik.values.business_name}
                  />
                   {formik.errors.business_name ? <div className="profile_error">{formik.errors.business_name}</div> : null}
                </div>
                <div className="input-box-agro">
                  <span className="details-agro">Business Email</span>
                  <input 
                  type="email" 
                  placeholder="buzor@gmail.com"
                  id="business_email"
                  name="business_email"
                  onChange={formik.handleChange}
                  value={formik.values.business_email}
                   />
                  {formik.errors.business_email ? <div className="profile_error">{formik.errors.business_email}</div> : null}
                </div>

                <div className="input-box-agro">
                  <span className="details-agro">Business Phone Number</span>
                  <input 
                  type="number" 
                  placeholder="08022346464" 
                  id="business_number"
                  name="business_number"
                  onChange={formik.handleChange}
                  value={formik.values.business_number}
                   />
                   {formik.errors.business_number ? <div className="profile_error">{formik.errors.business_number}</div> : null}
                </div>

                <div className="input-box-agro">
                  <span className="details-agro">Business Description</span>
                  <input
                    type="text"
                    placeholder="Deals with all diary product"
                    id="business_desc"
                    name="business_desc"
                    onChange={formik.handleChange}
                    value={formik.values.business_desc}
                  />
                  {formik.errors.business_desc ? <div className="profile_error">{formik.errors.business_desc}</div> : null}
                </div>

                <div className="input-box-agro">
                  <span className="details-agro">
                    National Identification Number (NIN)
                  </span>
                  <input 
                  type="number" 
                  placeholder="01234567890" 
                  id="nin"
                  name="nin"
                  onChange={formik.handleChange}
                  value={formik.values.nin}
                   />
                   {formik.errors.nin ? <div className="profile_error">{formik.errors.nin}</div> : null}
                </div>

                <div className="input-box-agro">
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
                </div>

                <div className="input-box-agro">
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
                </div>
                <div className="input-box-agro">
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
                </div>
              </div>

              {/*Business Address */}
              <div className="Address-input-box-agro">
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
              </div>

              {/* Account Details Section */}
              <div className="title-agro">Account details</div>
              <div className="user-details-agro">
                <div className="input-box-agro">
                  <span className="details-agro">Account Name</span>
                  <input
                    type="text"
                    placeholder="Godswill & Sons Enterprise"
                    id="account_name"
                    name="account_name"
                    onChange={formik.handleChange}
                    value={formik.values.account_name}
                  />
                  {formik.errors.account_name ? <div className="profile_error">{formik.errors.account_name}</div> : null}
                </div>
                <div className="input-box-agro">
                  <span className="details-agro">Account Number</span>
                  <input 
                  type="number" 
                  placeholder="0123456789" 
                  id="account_number"
                  name="account_number"
                  onChange={formik.handleChange}
                  value={formik.values.account_number}
                   />
                   {formik.errors.account_number ? <div className="profile_error">{formik.errors.account_number}</div> : null}
                </div>
                <div className="input-box-agro">
                  <span className="details-agro">Bank Name</span>
                  <input 
                  type="text" 
                  placeholder="First Bank" 
                  id="bank_name"
                  name="bank_name"
                  onChange={formik.handleChange}
                  value={formik.values.bank_name}
                  />
                  {formik.errors.bank_name ? <div className="profile_error">{formik.errors.bank_name}</div> : null}
                </div>
                <div className="input-box-agro">
                  <span className="details-agro">Date of Birth</span>
                  <input 
                  type="date" 
                  placeholder="24-11-2022" 
                  id="dob"
                  name="dob"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                   />
                   {formik.errors.dob ? <div className="profile_error">{formik.errors.dob}</div> : null}
                </div>
              </div>

              <div className="agree-terms-agro">
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
              </div>
              <div className="Address-container-agro">
                <div className="button-agro">
                  <button type="submit">Submit</button>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
