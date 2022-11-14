import React from "react"
import "./BrokersProfile.css"
import {useState} from "react";
import { IdGenerator } from "./IDGenerate";
// import { IdGenerator } from "./IDGenerator";






export const BrokersProfileContent= () => {
  const [generate, setGenerate] =  useState(true);
  const handleSubmit = (e) => {
    setGenerate(!generate)
  }
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
          <input type="text" placeholder="Godswill Chibuzo" required />
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Email</span>
          <input type="text" placeholder="buzor@gmail.com" required />
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Password</span>
          <input type="text" placeholder="***********" required />
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Confirm Password</span>
          <input type="text" placeholder="Confirm your password" required />
        </div>
        <div className="input-box-agro">
          <span className="details-agro">Phone Number</span>
          <input type="text" placeholder required />
        </div>
        {/*Gender*/}
        <div className="gender-details-agro">
          <div class="gender-agro">
							<span class="details-agro">Gender</span>
						</div> 
          <div className="radio-button-agro">
           
            <div className="male-radio-agro">						
              <label className="radio-input-agro">male</label>
              <input type="radio" defaultValue="male" name="gender" />
            </div>		
            <div className="female-radio-agro">																					
              <label className="radio-input-agro">female</label>
              <input type="radio" defaultValue="female" name="gender" />										
            </div>										
          </div>		
        </div>
        {/*Address and Submit*/}
      </div>					
      <div className="Address-input-box-agro">
        <span className="details-agro">Address</span>
        <input type="text" placeholder required />
      </div>
      <div className="agree-terms-agro">
        <input type="checkbox" name="policy-terms" id="policy-terms" />
        <p>by clicking,you agree to AgroEase's <span>Terms of Service</span>  and acknowledge that AgroEase's <span>Private Policy </span> applies to you. </p><p>
        </p></div>
      <div className="Address-container-agro">
        <div className="button-agro">
          <input type="submit"  onClick = {handleSubmit }defaultValue="Submit" />
        </div>
      </div>
    </form>
  </div>
</div>
</div>
      )  :
    // <IdGenerator/>
<IdGenerator/>

}
 
    </React.Fragment>
  
  )
}