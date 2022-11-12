import React from 'react'

const LogInAccountButtonFarmer = ({isSubmitting, handleSubmit}) => {
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

export default LogInAccountButtonFarmer