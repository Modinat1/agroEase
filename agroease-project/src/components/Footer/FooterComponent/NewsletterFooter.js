import React from 'react';
import {AiOutlineMail} from "react-icons/ai"

const NewsletterFooter = () => {
  return (
    <div>
        <h2>Get News Letter</h2>
        <div>
            <div>
                <p>We will send you updates on available product, not spam</p>
            </div>
            <div>
                <p>Email</p>
                <div>
                    <input type="text"/>
                    <div><AiOutlineMail /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsletterFooter