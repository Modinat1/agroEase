import React from 'react'
import {FcGoogle} from "react-icons/fc"

const SignInFormFooter = () => {
  return (
    <div className='flex flex-col gap-1 pt-3 justify-center text-center'>
        <small>Already have an account? <span className='green font-medium'>Sign In</span></small>
        <small>OR</small>
        <small className='flex justify-center gap-2'><FcGoogle  className='text-2xl'/> Sign up with Google</small>
    </div>
  )
}

export default SignInFormFooter