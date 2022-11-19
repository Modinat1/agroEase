//import axiosinstance
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../axios-config/axios-user-config";



    
// Register user Broker
const registerBrokerUser = async (values) => {
    try {
        const response = await axiosInstance.post("brokers/register", values)
        console.log(response)
        const { access , refresh} = response.data.tokens
        const tokens =[]
        tokens.push({access: access.token});
        tokens.push({ refresh: refresh.token});
        localStorage.setItem('token', JSON.stringify(tokens));
        console.log(tokens)
        return response.data
        
     } 

    catch (error) {
        console.log(error)
    }
}


const UserServices = {
    registerBrokerUser,
}

export default UserServices;