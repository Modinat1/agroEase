import "./GenerateLinkPage.css"

import React from 'react'
import referalImage from '../images/referalImage.png'

const GenerateLinkPage = () => {
  return (
    <>
     <main className="referal-page-general-container">
        <section className="referal-left-image">
          {/* <img src="referal-image.png" alt="refer-and-earn-image" /> */}
          <img src={referalImage}  className ="referalImage" alt="referl-generate-link"/>
          
        </section>
        <section className="refer-and-earn-right-section-content">
          <h2 className="referal-header">Earn as much as 1000 Naira </h2>
          {/*  inner container */}
          <div className="refer-and-earn-section-inner-container">
            {/* main right up */}
            <div className="earn-as-much-content">
              <p className="refer-and-earn-section-detail">
                You can earn as much as 1000 naira if you refer
                anyone to our wesite and they get to sign up with
                your referral link
              </p>
              <div className="refer-generate-link-button-container">
                <button type="button" className="refer-generate-link-button">Generate Link</button>
              </div>
            </div>
            <div className="generated-password-container">
              {/* <input type="text" placeholder="jhdupa09793oeydlp9etos[oruywpfi9"> */}
              <button type="button" className="referal-main-id">jhdupa09793oeydlp9etosoruywpfi9</button>
              <img src="copy-id.png" alt="id-number" className="referal-id-copy-icon" />
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default GenerateLinkPage