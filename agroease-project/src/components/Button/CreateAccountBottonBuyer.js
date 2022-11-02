import React from 'react'
import "./StyleButtons.css"

const CreateAccountBottonBuyer = ({isSubmitting, handleSubmit, handleReset}) => {


  return (
    <div className='create-account-style'>
      <button
            disabled={isSubmitting}
            type="button"
            onClick={handleSubmit} 
        >
           {
             isSubmitting? ( "Submitting...") : ("Create Account") 
           }


           </button>
    </div>
  )
}

export default CreateAccountBottonBuyer