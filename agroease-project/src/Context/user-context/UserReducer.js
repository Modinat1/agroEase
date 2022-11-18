import { ADD_USER, EDIT_USER } from "./UserType"


const UserReducer = (state, action) => {
    const {type, payload} = action
    const {users} = state

    switch (type) {
        case ADD_USER: 
        return  {
            ...state,
            users: [...users, payload]
        }

        case EDIT_USER:
                return {
                    ...state,
                    users: users.map((user) =>
                    user.id === payload.id ? 
                    {...user, 
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                        email: payload.email,
                        password: payload.password,
                        gender: payload.gender,
                        phoneNumber: payload.phoneNumber,
                        role: payload.role} : user
                    )
        }

        default:
            return state
    }
}
export default UserReducer