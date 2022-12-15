import React from 'react'
import { Link } from 'react-router-dom'
import "./UnauthorizedMessage.css"

const UnauthorizedMessage = () => {

    
  return (
    <div className='unauthorized-width'>
        <h1>You are Unauthorized to Signin using this email</h1>
        <div className='unauthorized-btn'>
            <Link to='/UserSignin'>
                <button>Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default UnauthorizedMessage