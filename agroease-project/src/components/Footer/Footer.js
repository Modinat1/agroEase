import React from 'react'
import "./Footer.css"
import ContactFooter from './FooterComponent/ContactFooter'
import CopyrightFooter from './FooterComponent/CopyrightFooter'
import NewsletterFooter from './FooterComponent/NewsletterFooter'

const Footer = () => {
  return (
    <div className=' footer-width '>
        <div className='container mx-auto max-wid'>
           <ContactFooter />
        </div>
        <div className='mt-5 pt-5 light-green'>
            <NewsletterFooter />
            <CopyrightFooter />
        </div>
    </div>
  )
}

export default Footer