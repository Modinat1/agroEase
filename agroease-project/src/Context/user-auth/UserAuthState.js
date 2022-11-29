import {
	SIGNUP_USER,
	SIGNUP_USER_ERROR,
	SIGNUP_USER_SUCCESS,
} from "./UserAuthType";

import React, { useReducer, useState } from "react";
import UserAuthContext from "./UserAuthContext";
import UserAuthReducer from "./UserAuthReducer";

export const UserAuthState = ({ children }) => {
	const [userAuth, setUserAuth] = useState({});
	const [user, setUser] = useState({});

	return (
		<UserAuthContext.Provider
			value={{
				userAuth,
				setUserAuth,
				user,
				setUser,
				// userAuth: state.userAuth,
				// signupUser,
				// ...state,
			}}>
			{children}
		</UserAuthContext.Provider>
	);
};
