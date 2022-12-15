
import axiosInstance from '../axios-config/axios-user-config';
import GeneralUserAuth from './GeneralUserAuth'


const UserRefreshToken = () => {

        const { setUserAuth, userAuth } = GeneralUserAuth();
        // const {accessToken, refreshToken} = userAuth
        const storedToken = localStorage.getItem("token")
        const rToken = localStorage.getItem('rtoken')

  
        const config = {
            headers: { Authorization: `Bearer ${storedToken}` },
        };


        const refresh = async () => {
            const response = await axiosInstance.post("/v1/auth/refresh-tokens", {
                refreshToken: rToken
            }, config)
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