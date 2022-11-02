import React from 'react'
import "./FootComp.css"
import FooterAddress from './FooterAddress'
import FooterQuicklink from './FooterQuicklink'
import FooterSocial from './FooterSocial'

const ContactFooter = () => {
  return (
    <div className='contact-foot-width container mx-auto'>
        <FooterSocial />
        <FooterQuicklink />
        <FooterAddress />
    </div>
  )
}

export default ContactFooter