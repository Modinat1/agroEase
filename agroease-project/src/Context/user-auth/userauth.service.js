import { data } from "autoprefixer"
import { useContext } from "react"
import axiosInstance from "../axios-config/axios-user-config"
import UserAuth from "./UserAuthContext"
import { UserAuthState } from "./UserAuthState"



//Sign up new users
const signUpNewUser = async (values, Autherror) => {
    
   
}

const AuthServices = {
    signUpNewUser,
}

export default AuthServices;