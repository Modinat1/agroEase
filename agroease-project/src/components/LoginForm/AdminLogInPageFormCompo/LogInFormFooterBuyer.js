import React from 'react'
import { Link } from 'react-router-dom'

const LogInFormFooterBuyer = () => {
  return (
    <div className='flex flex-col gap-1 pt-3 justify-center text-center'>
        <small>Dont have an account? <Link to="/buyerlogin"><span className='green font-medium cursor-pointer'>Sign up</span></Link></small>
        <small className='green font-medium cursor-pointer'>Forgot Password</small>
    </div>
  )
}

export default LogInFormFooterBuyer