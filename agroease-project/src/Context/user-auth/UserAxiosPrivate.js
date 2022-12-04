import { useEffect } from "react"
import { axiosPrivate } from "../axios-config/axios-user-config"

import GeneralUserAuth from "./GeneralUserAuth"
import UserRefreshToken from "./UserRefreshToken"


 

 const UserAxiosPrivate = () => {
    const refresh = UserRefreshToken()
    const {userAuth} = GeneralUserAuth()

    useEffect(() => {
     

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    const token = JSON.parse(localStorage.getItem("token"))
                    config.headers['Authorization'] = `Bearer ${token?.accessToken}`
                }
                return config;
            }, (error) => Promise.reject(error)
        )



        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [refresh, userAuth])
    
    return axiosPrivate;
 }

 export default UserAxiosPrivate;