import React from 'react';
import {AiOutlineCopyright} from "react-icons/ai";

const CopyrightFooter = () => {
  return (
    <div className='flex text-center justify-center pt-8 pb-2'>
        <AiOutlineCopyright className='mt-1'/>
        <div>
            <small>AgroEase 2022. Alright reserved</small>
        </div>
    </div>
  )
}

export default CopyrightFooter