import React, { useReducer } from 'react'
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { ADD_USER, EDIT_USER } from './UserType';

export const UserState = ({children}) => {

    const initialState = {
        users: [],
        
    }  
    

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // Creating pure functions
    // For Add user
    const addUser =(addObj)=> {
      dispatch({type: ADD_USER, payload: addObj})
  }

    // For Edit user
    const editUser =(userObj)=> {
      dispatch({type: EDIT_USER, payload: userObj})
  }

  return (
    <UserContext.Provider value={{
        users: state.users,
        addUser,
        editUser,
        ...state
    }}>{children}</UserContext.Provider>
  )
}
