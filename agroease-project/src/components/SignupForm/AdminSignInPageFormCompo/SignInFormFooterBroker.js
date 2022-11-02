import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'

const SignInFormFooterBroker = () => {
  return (
    <div className='flex flex-col gap-1 pt-3 justify-center text-center'>
        <small>Already have an account? <Link to="/brokerlogin"><span className='green font-medium'>Sign In</span></Link></small>
        <small>OR</small>
        <small className='flex justify-center gap-2'><FcGoogle  className='text-2xl'/> Sign up with Google</small>
    </div>
  )
}

export default SignInFormFooterBroker