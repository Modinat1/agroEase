import React from 'react'
import {BsTelephoneInbound} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const FooterAddress = () => {
  return (
    <div>
        <div>
            <h4>Abuja</h4>
            <p>Tech Specialist, <br />
                Wuse Zone 6
            </p>
        </div>
        <div>
            <h4>Lagos</h4>
            <p>Tech Specialist, <br />
                Wuse Zone 6
            </p>
        </div>
        <div>
            <BsTelephoneInbound />
            <div>
                <p>08082957336</p>
            </div>
        </div>
        <div>
            <AiOutlineMail />
            <div>
                <p>agroease@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default FooterAddress