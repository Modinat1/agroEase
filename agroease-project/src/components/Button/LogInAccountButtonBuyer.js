import React from 'react'

const LogInAccountButtonBuyer = ({isSubmitting, handleSubmit}) => {
  return (
    <div className='create-account-style'>
        <button
              disabled={isSubmitting}
              type="button"
              onClick={handleSubmit}
              >
                
                {
                  isSubmitting? ( "Submitting...") : ("LogIn") 
                }
                
              </button>
    </div>
  )
}

export default LogInAccountButtonBuyer