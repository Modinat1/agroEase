import React from 'react'
import { Link } from 'react-router-dom'
import "./StyleButtons.css"

const CreateAccountBottonBroker = ({isSubmitting, handleSubmit, handleReset}) => {
  return (
    <div className='create-account-style'>
       <Link to="/brokerlogin"><button
            disabled={isSubmitting}
            type="button"
            onClick={handleSubmit} 
        >
           {
            isSubmitting? ("Submitting...")  : ("Create Account") 
           }

           </button></Link>
    </div>
  )
}

export default CreateAccountBottonBroker