import React from 'react'
import ContactFooter from './FooterComponent/ContactFooter'
import CopyrightFooter from './FooterComponent/CopyrightFooter'
import NewsletterFooter from './FooterComponent/NewsletterFooter'

const Footer = () => {
  return (
    <div className='container mx-auto'>
        <ContactFooter />
        <NewsletterFooter />
        <CopyrightFooter />
    </div>
  )
}

export default Footer