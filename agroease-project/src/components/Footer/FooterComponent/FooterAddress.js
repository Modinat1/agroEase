import React from 'react'
import {BsTelephoneInbound} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const FooterAddress = () => {
  return (
    <div className='widths mt-7'>
        <div >
            <h4 className='main-green mid pb-2 font-bold'>Abuja</h4>
            <p>Tech Specialist, <br />
                Wuse Zone 6
            </p>
        </div>
        <div>
            <h4 className='main-green mid py-2 font-bold'>Lagos</h4>
            <p>Tech Specialist, <br />
                Wuse Zone 6
            </p>
        </div>
        <div className='flex gap-1 pt-3'>
            <BsTelephoneInbound className='main-green'/>
            <div>
                <p>08082957336</p>
            </div>
        </div>
        <div className='flex gap-1 pt-3'>
            <AiOutlineMail className='main-green mt-1'/>
            <div>
                <p>agroease@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default FooterAddress