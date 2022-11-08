import React from 'react'

const CreateAccountBottonFarmer = ({isSubmitting, handleSubmit}) => {
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