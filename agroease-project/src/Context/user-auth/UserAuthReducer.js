import { SIGNUP_USER } from "./UserAuthType"


const UserAuthReducer = (state, action) => {
    const {type, payload} = action
    const {userAuth} = state


    switch (type) {
        case SIGNUP_USER: 
        return {
            ...state,
            userAuth: [...userAuth, payload]
        }
        default:
            return state
    }
}


export default UserAuthReducer