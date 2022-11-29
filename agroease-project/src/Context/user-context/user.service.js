//import axiosinstance
// import { Navigate, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../axios-config/axios-user-config";



    
// Register user Broker
const registerBrokerUser = async (values) => {
    try {
        const response = await axiosInstance.post("v1/auth/register", values)
        console.log(response.data)
        // const { access , refresh} = response.data.tokens
        // const tokens =[]
        // tokens.push({access: access.token});
        // tokens.push({ refresh: refresh.token});
        // localStorage.setItem('token', JSON.stringify(tokens));
        // console.log(tokens)
        return response.data
        
     } 

    catch (error) {
        console.log(error)
    }
}


// Login a user 
const loginUser = async (values) => {

    try {
        const response = await axiosInstance.post("v1/auth/login", values)
        console.log(response)
        const { access , refresh} = response.data.tokens
        const tokens =[]
        tokens.push({access: access.token});
        tokens.push({ refresh: refresh.token});
        localStorage.setItem('token', JSON.stringify(tokens));
        console.log(tokens)
        toast.success("Successful")
        return response.data
        
     } 

    catch (error) {
        console.log(error)
        toast.error("User not found")
    }
}


const UserServices = {
    registerBrokerUser,
    loginUser,
}

export default UserServices;