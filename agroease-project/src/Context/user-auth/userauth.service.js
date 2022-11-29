import { data } from "autoprefixer"
import { useContext } from "react"
import axiosInstance from "../axios-config/axios-user-config"
import UserAuth from "./UserAuthContext"
import { UserAuthState } from "./UserAuthState"



//Sign up new users
const signUpNewUser = async (values, Autherror) => {
    
    try {
        const response = await axiosInstance.post("v1/auth/register", values)
        console.log(response.data)
        return response.data
    }

    catch (error) {
        if(error.response) {
        //     console.log(error)
        //     console.log(error.response.status)
		// 	console.log(error.response.data.message)
			
        return error.response.status
    }
    }
}

const AuthServices = {
    signUpNewUser,
}

export default AuthServices;