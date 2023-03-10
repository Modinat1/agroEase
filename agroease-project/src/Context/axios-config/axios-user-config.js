import axios from "axios"


//Axios instance
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        Accepted: "application/json",
        "Content-Type" : "application/json",
    },
});
export const axiosPrivate = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
        "Content-Type" : "application/json",
    },
});

export default axiosInstance;