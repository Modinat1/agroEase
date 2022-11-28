import {SIGNUP_USER,
	SIGNUP_USER_ERROR,
	SIGNUP_USER_SUCCESS,} from './UserAuthType'

import React, {useReducer, useState} from 'react'
import UserAuthContext from './UserAuthContext'
import UserAuthReducer from './UserAuthReducer'

export const UserAuthState = ({children}) => {
    // const initialState = {
    //     userAuth: {},


    // }
    // const [state, dispatch] = useReducer(UserAuthReducer, initialState);


    // For SignupUser
	// const signupUser = (addObj) => {
	// 	dispatch({ type: SIGNUP_USER, payload: addObj });
	// };
    const [userAuth, setUserAuth] = useState({})
    return (
		<UserAuthContext.Provider
			value={{
                userAuth,
                setUserAuth,
                // userAuth: state.userAuth,
                // signupUser,
				// ...state,

			}}>
			{children}
		</UserAuthContext.Provider>
	);
}