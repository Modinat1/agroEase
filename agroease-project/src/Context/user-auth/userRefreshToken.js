
import axiosInstance from '../axios-config/axios-user-config';
import GeneralUserAuth from './GeneralUserAuth'


const userRefreshToken = () => {

        const { setUserAuth, userAuth } = GeneralUserAuth();
        const {accessToken, refreshToken} = userAuth
  
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` },
        };


        const refresh = async () => {
            const response = await axiosInstance.post("/v1/auth/refresh-tokens", {
                refreshToken: userAuth.refreshToken
            }, config)
            console.log(response)
            //   console.log(userAuth.refreshToken)
            //   const accessToken = response.data.tokens.access.token;
            //   const refreshToken = response.data.tokens.refresh.token;
            //   console.log(setUserAuth({ accessToken, refreshToken}))
            // //   console.log(userAuth)
            // //   console.log(userAuth.refreshToken)
            //  return accessToken
            // console.log(response.data.tokens.access.token)
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

export default userRefreshToken