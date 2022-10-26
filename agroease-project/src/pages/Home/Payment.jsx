import React from "react"
// import "./HomePage.css"
import verve from "../../images/verve.png"
import visa from "../../images/visa.png"
import electron from "../../images/electron.png"
import paystack from "../../images/paystack.png"
import federalmin from "../../images/federalmin.jpeg"
import mastercard from "../../images/mastercard.png"
import faologo from "../../images/faologo.png"

export const Payment = () => {
  return (
   <div className="payment-partners">
  <div className="all-payment">
    <div className="all-payment-writeup">
      <h4>All Payments are secured by</h4>
    </div>
    <div className="pay-stack">
      <img src={paystack} alt="pastack" />
    </div>
    <div className="pay">
      <img src={visa}alt="visa" />
      <img src={mastercard} alt ="mastercard"/>
      <img src={verve} alt= "verve"  />
      <img src={electron} alt="electron" />
    </div>
  </div>
  <div className="partner-with">
    <h4>We are partners with</h4>
    <div className="partners">
      <div className="tiidelab">
        <img src={faologo} alt="fabolo" />
      </div>
      <div className="neca">
        <img src={federalmin} alt="federalmin" />
      </div>
    </div>
  </div>
</div>

  )
}