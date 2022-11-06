import React from 'react'

const LogInFormFooterFarmer = () => {
  return (
    <div className='flex flex-col gap-1 pt-3 justify-center text-center'>
        <small>Dont have an account? <span className='green font-medium cursor-pointer'>Sign up</span></small>
        <small className='green font-medium cursor-pointer'>Forgot Password</small>
    </div>
  )
}

export default LogInFormFooterFarmer