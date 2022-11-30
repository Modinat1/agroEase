import React from 'react'
import { Link } from 'react-router-dom'
import './FootComp.css'

const FooterQuicklink = () => {
  return (
    <div>
      <div className="wid">
        <h1 className="main-green mid font-bold">Quick Link</h1>
        <ul>
          <Link to="/about">
            {' '}
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>{' '}
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>

          <Link to="/PrivacyPolicy">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/help">
            <li>FAQs</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default FooterQuicklink
