import React from 'react'
import agrologo from "../../../images/agrologo.png"
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa"

const FooterSocial = () => {
  return (
    <div>
        <div>
            <img src={agrologo} alt=""/>
            <div>
                <p>AgroEase is an online agicultural store
                    and marketplace for farm input,
                    agricultural equipments, where you 
                    can conviniently and safely shop
                </p>
            </div>
        </div>
        <div>
            <h2 className='main-green pt-4 font-bold pb-2 '>Our Social Page</h2>
            <div className='flex gap-3'>
                <div className='social-cover'><FaFacebookF className='grays'/></div>
                <div className='social-cover'><BsTwitter className='grays'/></div>
                <div className='social-cover'><FaLinkedinIn className='grays'/></div>
            </div>
        </div>
    </div>
  )
}

export default FooterSocial