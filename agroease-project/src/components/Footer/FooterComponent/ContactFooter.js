import React from 'react'
import "./FootComp.css"
import FooterAddress from './FooterAddress'
import FooterQuicklink from './FooterQuicklink'
import FooterSocial from './FooterSocial'

const ContactFooter = () => {
  return (
    <div className='contact-foot-width'>
        <FooterSocial className="widths"/>
        <FooterQuicklink />
        <FooterAddress />
    </div>
  )
}

export default ContactFooter