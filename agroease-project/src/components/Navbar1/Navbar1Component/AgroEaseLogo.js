import React from 'react'
import { Link } from 'react-router-dom'
import agrologo from "../../../images/agrologo.png"

const AgroEaseLogo = () => {
  return (
    <div>
        <Link to="/"><img src={agrologo} alt="logo"/></Link>
    </div>
  )
}

export default AgroEaseLogo