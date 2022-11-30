import { useContext } from "react"
import UserAuth from "./UserAuthContext";



const GeneralUserAuth = () => {
    return useContext(UserAuth)
}

export default GeneralUserAuth;