import React from 'react';
import "./FootComp.css"
import {AiOutlineMail} from "react-icons/ai"

const NewsletterFooter = () => {
  return (
    <div className='newsletter-width '>
        <h2 className='font-bold mid'>Get News Letter</h2>
        <div className='newsletter-flex-email'>
            <div>
                <p>We will send you updates on available product, not spam</p>
            </div>
            <div className='flex gap-1 push-top1'>
                <p>Email:</p>
                <div className='footer-email-input-set'>
                    <input type="text" /> 
                    <div className='adjust'> <AiOutlineMail className='main-green'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsletterFooter