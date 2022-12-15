import React from 'react'
import Navbar1 from '../../components/Navbar1/Navbar1'
import UnauthorizedMessage from './UnauthorizedMessage'

const Unauthorized = () => {
  return (
    <div>
        <Navbar1 />
        <UnauthorizedMessage />
    </div>
  )
}

export default Unauthorized