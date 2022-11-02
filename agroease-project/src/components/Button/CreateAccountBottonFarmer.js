import React from 'react'
import "./StyleButtons.css"

const CreateAccountBottonFarmer = ({isSubmitting, handleSubmit, handleReset}) => {

   
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

export default CreateAccountBottonFarmer