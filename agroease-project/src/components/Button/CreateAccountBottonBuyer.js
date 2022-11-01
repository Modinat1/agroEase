import React from 'react'
import { Link } from 'react-router-dom'
import "./StyleButtons.css"

const CreateAccountBottonBuyer = ({isSubmitting, handleSubmit, handleReset}) => {
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
           <Link to="/brokerlogin"><button>loeb</button></Link>
    </div>
  )
}

export default CreateAccountBottonBuyer