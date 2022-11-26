import {
	ADD_USER,
	EDIT_USER,
	SIGNUP_USER_ERROR,
	SIGNUP_USER_SUCCESS,
} from "./UserType";
import React, { useReducer } from "react";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

export const UserState = ({ children }) => {
	const initialState = {
		users: [],
		token: "",
		loading: false,
		errorMessage: null,
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	// Creating pure functions
	// For Add user
	const addUser = (addObj) => {
		dispatch({ type: ADD_USER, payload: addObj });
	};

	// For Edit user
	const editUser = (userObj) => {
		dispatch({ type: EDIT_USER, payload: userObj });
	};

	//For User succes Auth
	const userSuccess = (userObj) => {
		dispatch({ type: SIGNUP_USER_SUCCESS, payload: userObj });
	};

	//For User error Auth
	const userError = (userObj) => {
		dispatch({ type: SIGNUP_USER_ERROR, payload: userObj });
	};

	return (
		<UserContext.Provider
			value={{
				users: state.users,
				token: state.token,
				errorMessage: state.errorMessage,
				addUser,
				editUser,
				userSuccess,
				userError,
				...state,
			}}>
			{children}
		</UserContext.Provider>
	);
};
