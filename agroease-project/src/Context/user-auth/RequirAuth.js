import { useLocation, Navigate, Outlet } from "react-router-dom";
// import GeneralUserAuth from "./GeneralUserAuth";


const RequireAuth = () => {


    // const { userAuth } = GeneralUserAuth()
    const location = useLocation()

    const userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
    
    return (
        userInfo?.email
        ? <Outlet />
        : <Navigate to="/UsersSignIn" state={{ from: location }} replace />
    )
   
}

export default RequireAuth;