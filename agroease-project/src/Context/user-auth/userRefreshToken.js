
import axiosInstance from '../axios-config/axios-user-config';
import GeneralUserAuth from './GeneralUserAuth'


const UserRefreshToken = () => {

        const { setUserAuth, userAuth } = GeneralUserAuth();
        const {accessToken, refreshToken} = userAuth
        // const storedToken = JSON.parse(localStorage.getItem("token"))
  
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` },
        };


        const refresh = async () => {
            const response = await axiosInstance.post("/v1/auth/refresh-tokens", {
                refreshToken: userAuth.refreshToken
            }, config)
            // const gettheToken = response.data.access.token
            // const userData = response.data.user

            // localStorage.setItem("token", JSON.stringify(gettheToken))
            // localStorage.setItem("user", JSON.stringify(userData))
            console.log(response)
          
            setUserAuth(prev => {
                console.log(JSON.stringify(prev));
                console.log(response.data.access.token)
                return { ...prev, accessToken: response.data.access.token}
            })
            console.log(setUserAuth)
            return response.data.access.token
        }
  return refresh
}

export default UserRefreshToken