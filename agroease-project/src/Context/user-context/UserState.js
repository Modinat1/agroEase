import React, { useReducer } from 'react'
import UserContext from './UserContext';
import UserReducer from './UserReducer';

export const UserState = ({children}) => {

    const initialState = {
        users: [],
        
    }  
    

    const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{
        users: state.users,
        ...state
    }}>{children}</UserContext.Provider>
  )
}
