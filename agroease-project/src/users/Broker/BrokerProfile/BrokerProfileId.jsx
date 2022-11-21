import React from "react"
import "./BrokersProfile.css"
import {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {IdGenerator} from  "./IDGenerate"








export const BrokersProfileContent= () => {
  const [generate, setGenerate] =  useState(true);
  const handleSubmit = (e) => {
    setGenerate(!generate)
  }

// USING FORMIK AND YUP FOR FORM VALIDATION
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      gender: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("'Password is required'"),
      cpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      phone:  Yup.number()
      .min(11, "Must be 11 digits or more")
      .required("Phone number is required"),

      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      console.log("submitted!");

      // handle submission
    },
  });





  return(
    <React.Fragment>
      { generate ?
      (<div className="My-broker">
     <div className="container-agro">
  <div className="title-agro">Profile</div>
  <div className="content-agro">
    <form action="#">
      <div className="user-details-agro">
        <div className="input-box-agro">
          <span className="details-agro">Name</span>
          <input type="text" name="name"   value={formik.values.name} onChange={formik.handleChange}   onBlur={formik.handleBlur} placeholder="Godswill Chibuzo" required />
          {formik.touched.name && formik.errors.name ? (
                      <div className="error">{formik.errors.name}</div>
                    ) : null}
        </div>
        
                    
                    
                    
        <div className="input-box-agro">
          <span className="details-agro">Email</span>
          <input type="email"name="email" value={formik.values.email} onChange={formik.handleChange}
            onBlur={formik.handleBlur} placeholder="buzor@gmail.com" required />
             {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Password</span>
          <input type="password"  name="password" value={formik.values.password} onChange={formik.handleChange}
            onBlur={formik.handleBlur}placeholder="***********" />
               {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Confirm Password</span>
          <input type="text"  name="cpassword" value={formik.values.cpassword} onChange={formik.handleChange}
          onBlur={formik.handleBlur} placeholder="Confirm your password"  />
           {formik.touched.cpassword && formik.errors.cpassword ? (
                      <div className="error">{formik.errors.cpassword}</div>
                    ) : null}
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Phone Number</span>
          <input type="number" placeholder  />
          {formik.touched.phone && formik.errors.phone ? (
                      <div className="error">{formik.errors.phone}</div>
                    ) : null}
        </div>
        {/*Gender*/}
        <div className="gender-details-agro">
          <div class="gender-agro">
							<span class="details-agro">Gender</span>
						</div> 
          <div className="radio-button-agro">
           
            <div className="male-radio-agro">						
              <label className="radio-input-agro">male</label>
              <input type="radio" value="male" name="gender" />
            </div>		
            <div className="female-radio-agro">																					
              <label className="radio-input-agro">female</label>
              <input type="radio" value="female" name="gender" />										
            </div>										
          </div>		
        </div>
        {/*Address and Submit*/}
      </div>					
      <div className="Address-input-box-agro">
        <span className="details-agro">Address</span>
        <input type="text" name="address"   value={formik.values.address} onChange={formik.handleChange}   onBlur={formik.handleBlur} />
        {formik.touched.address && formik.errors.address ? (
                      <div className="error">{formik.errors.address}</div>
                    ) : null}
      </div>
      <div className="agree-terms-agro">
        <input type="checkbox" name="policy-terms" id="policy-terms" />
        <p>by clicking,you agree to AgroEase's <span>Terms of Service</span>  and acknowledge that AgroEase's <span>Private Policy </span> applies to you. </p><p>
        </p></div>
      <div className="Address-container-agro">
        <div className="button-agro">
          <input type="submit"  onClick = {handleSubmit } value="Submit" />
        </div>
      </div>
    </form>
  </div>
</div>
</div>
      )  :   <IdGenerator />

}
 
    </React.Fragment>

  )
}