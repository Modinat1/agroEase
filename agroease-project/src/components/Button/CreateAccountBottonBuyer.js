import React from 'react'

const CreateAccountBottonBuyer = ({isSubmitting, handleSubmit}) => {
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